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
import { ScrollArea } from "@/components/ui/scroll-area";
import AddData from "@/components/AddData";

export const getServerSideProps = async (context) => {
  const res = await fetch("https://prisma-tut.vercel.app/api/teachers");
  const teachers = await res.json();
  console.log("Server: ", teachers);
  return {
    props: {
      teachers,
    },
  };
};

function page({ teachers }) {
  // const teachers = [
  //   {
  //     id: 1,
  //     firstName: "diana",
  //     lastName: "prince",
  //     age: 26,
  //     gender: "Female",
  //     email: "diana@gmail.com",
  //   },
  //   {
  //     id: 2,
  //     firstName: "clark",
  //     lastName: "kent",
  //     age: 26,
  //     gender: "Male",
  //     email: "clark@gmail.com",
  //   },
  //   {
  //     id: 3,
  //     firstName: "bruce",
  //     lastName: "wayne",
  //     age: 27,
  //     gender: "Male",
  //     email: "bruce@gmail.com",
  //   },
  // ];
  const schema = ["id", "name", "age", "gender", "email"];
  return (
    <>
      <Head>
        <title>Teachers Page</title>
      </Head>

      <div className="flex  w-1/2 justify-around my-2 items-center">
        <h1 className="text-xl">Teachers Database</h1>
        <AddData schema={schema} name="teacher" />
      </div>
      <ScrollArea className="border-2 my-2 w-4/6 rounded-md h-[520px]">
        <Table className="w-full capitalize ">
          <TableHeader>
            <TableRow className="text-center">
              {schema?.map((data, index) => (
                <TableHead key={index}>{data}</TableHead>
              ))}
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
      </ScrollArea>
    </>
  );
}

export default page;
