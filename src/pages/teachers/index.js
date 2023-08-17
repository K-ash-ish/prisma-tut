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

// export const getServerSideProps = async (context) => {
//   //   const res = await fetch("https://prisma-tut.vercel.app/api/teachers");
//   //   const teachers = await res.json();
//   //   console.log("Server: ", teachers);
//   //   return {
//   //     props: {
//   //       teachers,
//   //     },
//   //   };
// };

function page() {
  const teachers = [
    {
      id: 1,
      firstName: "diana",
      lastName: "prince",
      age: 26,
      gender: "Female",
      email: "diana@gmail.com",
    },
    {
      id: 2,
      firstName: "clark",
      lastName: "kent",
      age: 26,
      gender: "Male",
      email: "clark@gmail.com",
    },
    {
      id: 3,
      firstName: "bruce",
      lastName: "wayne",
      age: 27,
      gender: "Male",
      email: "bruce@gmail.com",
    },
  ];
  return (
    <>
      <Head>
        <title>Teachers Page</title>
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
          {teachers?.map((teacher) => {
            return (
              <TableRow key={teacher.id} className="">
                <TableCell>{teacher.id}</TableCell>
                <TableCell>{`${teacher.firstName} ${teacher.lastName}`}</TableCell>
                <TableCell>{teacher.age}</TableCell>
                <TableCell>{teacher.gender}</TableCell>
                <TableCell>{teacher.email}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default page;
