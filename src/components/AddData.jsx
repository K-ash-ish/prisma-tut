import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function AddData({ schema, name }) {
  const [input, setInput] = useState();

  function handleClick(e) {
    e.preventDefault();
    console.log(e.target);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="capitalize">Add {name}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="capitalize">Add {name}</DialogTitle>
          <DialogDescription>Add {name} to the database.</DialogDescription>
        </DialogHeader>
        <form action="">
          <div className="grid gap-4 py-4">
            {schema?.map((data, index) => (
              <div key={index} className="grid grid-cols-4 items-center gap-4 ">
                <Label htmlFor="name" className="text-right capitalize">
                  {data}
                </Label>
                <Input id="name" value={input} className="col-span-3" />
              </div>
            ))}
            
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleClick}>
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddData;
