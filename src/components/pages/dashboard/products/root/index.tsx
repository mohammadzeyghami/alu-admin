import { Table } from "antd";
import { Input, PageWrapper, View } from "../../../..";

const CustomTable = () => {
  // Sample data
  const dataSource = [
    {
      key: "1",
      name: "John Doe",
      age: 28,
      customData: "Custom Data 1",
      anotherCustomData: "Another Custom Data 1",
      expandContent: "Expandable Content 1",
      children: [
        {
          key: "123",
          name: "John Doe",
          age: 28,
          customData: "Custom Data 1",
          anotherCustomData: "Another Custom Data 1",
          expandContent: "Expandable Content 1",
          children: [
            {
              key: "1234",
              name: "John Doe",
              age: 28,
              customData: "Custom Data 1",
              anotherCustomData: "Another Custom Data 1",
              expandContent: "Expandable Content 1",
            },
          ],
        },
      ],
    },
    {
      key: "2",
      name: "Jane Doe",
      age: 32,
      customData: "Custom Data 2",
      anotherCustomData: "Another Custom Data 2",
      expandContent: "Expandable Content 2",
    },
    {
      key: "4",
      name: "John Doe",
      age: 28,
      customData: "Custom Data 1",
      anotherCustomData: "Another Custom Data 1",
      expandContent: "Expandable Content 1",
    },
    {
      key: "5",
      name: "Jane Doe",
      age: 32,
      customData: "Custom Data 2",
      anotherCustomData: "Another Custom Data 2",
      expandContent: "Expandable Content 2",
    },
    {
      key: "6",
      name: "John Doe",
      age: 28,
      customData: "Custom Data 1",
      anotherCustomData: "Another Custom Data 1",
      expandContent: "Expandable Content 1",
    },
    {
      key: "7",
      name: "Jane Doe",
      age: 32,
      customData: "Custom Data 2",
      anotherCustomData: "Another Custom Data 2",
      expandContent: "Expandable Content 2",
    },
    {
      key: "8",
      name: "John Doe",
      age: 28,
      customData: "Custom Data 1",
      anotherCustomData: "Another Custom Data 1",
      expandContent: "Expandable Content 1",
    },
    {
      key: "9",
      name: "Jane Doe",
      age: 32,
      customData: "Custom Data 2",
      anotherCustomData: "Another Custom Data 2",
      expandContent: "Expandable Content 2",
    },
    {
      key: "11",
      name: "John Doe",
      age: 28,
      customData: "Custom Data 1",
      anotherCustomData: "Another Custom Data 1",
      expandContent: "Expandable Content 1",
    },
    {
      key: "22",
      name: "Jane Doe",
      age: 32,
      customData: "Custom Data 2",
      anotherCustomData: "Another Custom Data 2",
      expandContent: "Expandable Content 2",
    },
    {
      key: "31",
      name: "John Doe",
      age: 28,
      customData: "Custom Data 1",
      anotherCustomData: "Another Custom Data 1",
      expandContent: "Expandable Content 1",
    },
    {
      key: "42",
      name: "Jane Doe",
      age: 32,
      customData: "Custom Data 2",
      anotherCustomData: "Another Custom Data 2",
      expandContent: "Expandable Content 2",
    },
  ];
  const expandable = {
    expandedRowRender: (record: any) => (
      <p style={{ margin: 0 }}>{record.expandContent}</p>
    ),
    rowExpandable: (record: any) => record.expandContent !== undefined,
  };

  return (
    <Table dataSource={dataSource} expandable={expandable}>
      <Table.Column title="Name" dataIndex="name" key="name" />
      <Table.Column title="Age" dataIndex="age" key="age" />
      <Table.Column
        title="Details"
        key="details"
        render={(_, record: any) => (
          <div>
            <p>{`${record.customData} - ${record.anotherCustomData}`}</p>
          </div>
        )}
      />
    </Table>
  );
};

const Products = () => {
  return (
    <View>
      <PageWrapper>
        <View className="w-full items-center ">
          <Input
            className="ms-auto w-[250px]"
            placeholder="Search Your Product ..."
          />
        </View>
        <CustomTable />
      </PageWrapper>
    </View>
  );
};

export { Products };
