import { prisma } from "@/db/prisma";
import { compare } from "@/utils/hash";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { sign } from "@/utils/jwt";
export async function POST(req) {
  const { email, password } = await req.json();
  const requestedAdmin = await prisma.admin.findFirst({
    where: {
      email: {
        equals: email,
      },
    },
  });
  if (requestedAdmin) {
    const isValidPassword = await compare(requestedAdmin.password, password);

    if (isValidPassword === true) {
      const token = sign({
        accessLevel: "admin",
        email: requestedAdmin.email,
      });
      const oneDay = 24 * 60 * 60 * 1000;

      cookies().set({
        name: "token",
        value: token,
        httpOnly: true,
        expires: Date.now() + oneDay,
      });

      return NextResponse.json({ message: "Login Success" }, { status: 200 });
    }

    return NextResponse.json({ message: "Wrong credentials" }, { status: 400 });
  }
  return NextResponse.json({ email, password }, { status: 200 });
}
