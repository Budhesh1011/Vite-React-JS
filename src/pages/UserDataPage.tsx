import { useMemo } from "react";
import { Badge, Tooltip } from "@mantine/core";
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from "mantine-react-table";
import { UsersList, type userDataTypes } from "../data/UsersList";
import Loader from "../components/common/Loader";

const UserDataPage = () => {
  const userColumns = useMemo<MRT_ColumnDef<userDataTypes>[]>(
    () => [
      {
        header: "Id",
        accessorKey: "id",
        size: 10,
      },
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Email",
        accessorKey: "email",
      },
      {
        header: "Department",
        accessorKey: "department",
      },
      {
        header: "Role",
        accessorKey: "role",
      },
      {
        header: "Location",
        accessorKey: "location",
      },
      {
        header: "Status",
        accessorKey: "status",
        size: 10,
        Cell: ({ cell }) => {
          const status = cell.getValue() as userDataTypes["status"];
          return (
            <Tooltip label={status} accessKey="status" className="text-white">
              <Badge
                color={status === "Active" ? "green" : "red"}
                variant="light"
                radius="sm"
              >
                {status}
              </Badge>
            </Tooltip>
          );
        },
      },
    ],
    []
  );

  const table = useMantineReactTable({
    columns: userColumns,
    data: UsersList,
    enableRowSelection: true,
    enableGlobalFilter: false,
    enableColumnActions: false,
    enableDensityToggle: false,
  });
  return (
    <div className="grid grid-cols-1 gap-4">
      <Loader>
        <MantineReactTable table={table} />
      </Loader>
    </div>
  );
};

export default UserDataPage;
