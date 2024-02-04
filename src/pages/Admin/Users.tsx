import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { FiEdit } from "react-icons/fi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const Users = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSaveUser = (event) => {
    event.preventDefault();
    setIsDialogOpen(false);
  };

  const tableData = [
    { sno: 1, name: "John Doe", email: "johndoe@example.com" },
    { sno: 2, name: "Jane Smith", email: "janesmith@example.com" },
    { sno: 3, name: "William Johnson", email: "williamj@example.com" },
  ];

  return (
    <div className="container min-h-[100vh] py-10 max-w-5xl w-ful flex flex-col gap-7">
      <h1 className="text-2xl font-semibold">User Lists</h1>

      <div className="flex justify-end">
        <Button onClick={() => setIsDialogOpen(true)}>Add New User</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>S No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.sno}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell className="text-center">
                <Button variant="ghost" size="icon">
                  <FiEdit className="w-5 h-5" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogTitle>Add New User</DialogTitle>
          <DialogDescription>
            Fill in the details of the new user.
          </DialogDescription>
          <form onSubmit={handleSaveUser} className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>
            <div className="flex justify-center">
              <Button
                variant="default"
                size="default"
                className="w-28"
                type="submit"
              >
                Save
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Users;
