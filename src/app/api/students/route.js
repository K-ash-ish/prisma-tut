import { prisma } from "@/db/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const studentSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  age: z.number().min(5).max(16),
  gender: z.enum(["Male", "Female"]),
  email: z.string().email().min(5),
  teacherId: z.number(),
});

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const teacherId = Number(searchParams.get("teacherId"));
  const students = await (teacherId
    ? prisma.student.findMany({
        where: {
          teacherId: {
            equals: teacherId,
          },
        },
      })
    : prisma.student.findMany());
  return NextResponse.json(students);
}

export async function POST(req) {
  try {
    const student = studentSchema.parse(await req.json());

    console.log(student);

    await prisma.student.create({
      data: student,
    });

    return NextResponse.json(student);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
