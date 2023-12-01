import { PageWrapper, TableColoumn, TableMain, Text, View } from "../../../..";
import { ButtonPrimary } from "../../../../atoms/button/primary";
import { Modal } from "../../../../atoms/modal";
import { useState } from "react";
const Users = () => {
  const [open, setOpen] = useState(false);
  return (
    <PageWrapper
      vertical
      className="min-h-[calc(100vh-200px)] w-full max-w-[1200px] mx-auto  p-6 pt-[40px]"
    >
      <Text className="mb-4 text-[16px] font-semibold">Users Table</Text>
      <TableMain
        className=" w-full "
        rowKey={(item) => item.id}
        dataSource={[
          {
            id: 6,
            username: "mohammad",
            password: "test",
            email: "zeighami@gmail",
            role: "admin",
          },
          {
            id: 5,
            username: "mohammad",
            password: "test",
            email: "zeighami@gmail",
            role: "admin",
          },
          {
            id: 4,
            username: "mohammad",
            password: "test",
            email: "zeighami@gmail",
            role: "admin",
          },
          {
            id: 3,
            username: "mohammad",
            password: "test",
            email: "zeighami@gmail",
            role: "admin",
          },
          {
            id: 2,
            username: "mohammad",
            password: "test",
            email: "zeighami@gmail",
            role: "admin",
          },
          {
            id: 1,
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
          render={(item, key) => <Text key={item + key.id}>{item}</Text>}
        />
        <TableColoumn
          title="UserName"
          dataIndex="username"
          key="username"
          sorter
          render={(item, key) => <Text key={item + key.id}>{item}</Text>}
        />
        <TableColoumn
          title="Role"
          dataIndex="role"
          key="role"
          sorter
          render={(item, key) => <Text key={item || "-" + key.id}>{item}</Text>}
        />
        <TableColoumn
          title="Edit"
          dataIndex="edit"
          key="edit"
          sorter
          render={(_, key) => (
            <View key={`edit-view-${key.id}`}>
              <ButtonPrimary
                onClick={() => setOpen(true)}
                type="link"
                key={`delete-${key.id}`}
              >
                Edit
              </ButtonPrimary>
              <ButtonPrimary type="link" key={`edit-${key.id}`}>
                Delete
              </ButtonPrimary>
            </View>
          )}
        />
      </TableMain>
      <Modal
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        {" "}
        this is test modal
      </Modal>
    </PageWrapper>
  );
};

export { Users };
