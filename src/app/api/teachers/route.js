import { prisma } from "@/db/prisma";
import { verify } from "@/utils/jwt";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { z } from "zod";
const teacherSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  age: z.number().min(24).max(50),
  gender: z.enum(["Male", "Female"]),
  email: z.string().email(),
});

export async function GET() {
  const token = verify(cookies().get({ name: "token" })?.value);
  console.log(token);
  if (!token || token.accessLevel !== "admin") {
    return NextResponse.json({ error: "Not authorised" }, { status: 401 });
  }
  const teachers = await prisma.teacher.findMany();
  return NextResponse.json(teachers);
}
export async function POST(req, res) {
  try {
    const teacher = teacherSchema.parse(await req.json());
    const newTeacher = await prisma.teacher.create({
      data: teacher,
    });
    return NextResponse.json(newTeacher);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something Went wrong!" },
      { status: 500 }
    );
  }
}
