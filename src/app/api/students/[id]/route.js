import { prisma } from "@/db/prisma";
import { NextResponse } from "next/server";
export async function GET(res, { params }) {
  const id = params;
  const student = await prisma.student.findFirstOrThrow({
    where: {
      id: { equals: id },
    },
  });
  //  const { searchParams } = new URL(req.url);
  // const teacherId = Number(searchParams.get("teacherId"));
  // const student = await prisma.student.findFirstOrThrow({
  //   where: {
  //     OR: [
  //       { id: { equals: Number(id) } },
  //       { teacherId: { equals: teacherId } },
  //     ],
  //   },
  // });
  return NextResponse.json(student);
}
