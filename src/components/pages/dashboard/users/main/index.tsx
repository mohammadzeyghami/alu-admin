import { PageWrapper, TableColoumn, TableMain, Text } from "../../../..";
import { ButtonPrimary } from "../../../../atoms/button/primary";

const Users = () => {
  return (
    <PageWrapper
      vertical
      className="min-h-[calc(100vh-200px)] w-full max-w-[1200px] mx-auto  p-6 pt-[40px]"
    >
      <Text className="mb-4 text-[16px] font-semibold">Users Table</Text>
      <TableMain
        className=" w-full "
        dataSource={[
          {
            username: "mohammad",
            password: "test",
            email: "zeighami@gmail",
            role: "admin",
          },
          {
            username: "mohammad",
            password: "test",
            email: "zeighami@gmail",
            role: "admin",
          },
          {
            username: "mohammad",
            password: "test",
            email: "zeighami@gmail",
            role: "admin",
          },
          {
            username: "mohammad",
            password: "test",
            email: "zeighami@gmail",
            role: "admin",
          },
          {
            username: "mohammad",
            password: "test",
            email: "zeighami@gmail",
            role: "admin",
          },
          {
            username: "mohammad",
            password: "test",
            email: "zeighami@gmail",
            role: "admin",
          },
        ]}
      >
        <TableColoumn
          title="Email"
          dataIndex="email"
          key="email"
          sorter
          render={(item) => <Text>{item}</Text>}
        />
        <TableColoumn
          title="UserName"
          dataIndex="username"
          key="username"
          sorter
          render={(item) => <Text>{item}</Text>}
        />
        <TableColoumn
          title="Role"
          dataIndex="role"
          key="role"
          sorter
          render={(item) => <Text>{item}</Text>}
        />
        <TableColoumn
          title="Edit"
          dataIndex="edit"
          key="edit"
          sorter
          render={() => (
            <>
              <ButtonPrimary type="link">Edit</ButtonPrimary>
              <ButtonPrimary type="link">Delete</ButtonPrimary>
            </>
          )}
        />
      </TableMain>
    </PageWrapper>
  );
};

export { Users };
