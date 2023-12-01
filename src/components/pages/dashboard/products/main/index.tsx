import { Table } from "antd";
import { PageWrapper } from "../../../..";

// Custom table component
const CustomTable = ({ dataSource }: any) => {
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
        render={(text, record: any) => (
          <div>
            <p>{`${record.customData} - ${record.anotherCustomData}`}</p>
          </div>
        )}
      />
    </Table>
  );
};

// Sample data
const dataSource = [
  {
    key: "1",
    name: "John Doe",
    age: 28,
    customData: "Custom Data 1",
    anotherCustomData: "Another Custom Data 1",
    expandContent: "Expandable Content 1",
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
    key: "1",
    name: "John Doe",
    age: 28,
    customData: "Custom Data 1",
    anotherCustomData: "Another Custom Data 1",
    expandContent: "Expandable Content 1",
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
    key: "1",
    name: "John Doe",
    age: 28,
    customData: "Custom Data 1",
    anotherCustomData: "Another Custom Data 1",
    expandContent: "Expandable Content 1",
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
    key: "1",
    name: "John Doe",
    age: 28,
    customData: "Custom Data 1",
    anotherCustomData: "Another Custom Data 1",
    expandContent: "Expandable Content 1",
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
    key: "1",
    name: "John Doe",
    age: 28,
    customData: "Custom Data 1",
    anotherCustomData: "Another Custom Data 1",
    expandContent: "Expandable Content 1",
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
    key: "1",
    name: "John Doe",
    age: 28,
    customData: "Custom Data 1",
    anotherCustomData: "Another Custom Data 1",
    expandContent: "Expandable Content 1",
  },
  {
    key: "2",
    name: "Jane Doe",
    age: 32,
    customData: "Custom Data 2",
    anotherCustomData: "Another Custom Data 2",
    expandContent: "Expandable Content 2",
  },
];

// App component
const ProductRoutes = () => {
  return (
    <PageWrapper>
      <CustomTable dataSource={dataSource} />
    </PageWrapper>
  );
};

export { ProductRoutes };
