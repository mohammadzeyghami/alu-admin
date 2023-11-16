import { Table, TableColumnProps } from "antd";
const TableColoumn = ({ children }: TableColumnProps<any>) => {
  return <Table.Column>{children}</Table.Column>;
};

export { TableColoumn };
