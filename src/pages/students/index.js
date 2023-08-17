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
  return (
    <>
      <Head>
        <title>Student Page</title>
      </Head>
      <Table className="w-full">
        <TableHeader>
          <TableRow className="text-center">
            <TableHead>id</TableHead>
            <TableHead>name</TableHead>
            <TableHead>age</TableHead>
            <TableHead>gender</TableHead>
            <TableHead>email</TableHead>
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
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default page;
