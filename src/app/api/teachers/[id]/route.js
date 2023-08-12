import { prisma } from "@/db/prisma";
import { NextResponse } from "next/server";

export async function GET(res, { params }) {
  const { id } = params;
  const teacher = await prisma.teacher.findFirst({
    where: {
      id: {
        equals: Number(id),
      },
    },
  });
  return NextResponse.json(teacher);
}
