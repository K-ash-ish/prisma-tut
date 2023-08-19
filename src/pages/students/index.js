import Head from "next/head";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddData from "@/components/AddData";
import { ScrollArea } from "@/components/ui/scroll-area";

export const getServerSideProps = async (context) => {
  const res = await fetch("https://prisma-tut.vercel.app/api/students");
  const students = await res.json();
  return {
    props: {
      students,
    },
  };
};
function page({ students }) {
  const schema = ["id", "name", "age", "gender", "email", "teacher id"];

  return (
    <>
      <Head>
        <title>Student Page</title>
      </Head>
      <div className="flex  w-1/2 justify-around my-2 items-center">
        <h1 className="text-xl">Student Database</h1>
        <AddData schema={schema} name="student" />
      </div>
      <ScrollArea className="border-2 my-2 w-4/6 rounded-md h-[520px]">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="text-center">
              {schema?.map((data, index) => (
                <TableHead key={index}>{data}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {students?.map((student) => {
              return (
                <TableRow key={student.id} className="">
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{`${student.firstName} ${student.lastName}`}</TableCell>
                  <TableCell>{student.age}</TableCell>
                  <TableCell>{student.gender}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.teacherId}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </ScrollArea>
    </>
  );
}

export default page;
