import { prisma } from "@/db/prisma";
import { NextResponse } from "next/server";
export async function GET(res, { params }) {
  const id = params;
  const student = await prisma.student.findFirstOrThrow({
    where: {
      id: { equals: id },
    },
  });
  return NextResponse.json(student);
}
