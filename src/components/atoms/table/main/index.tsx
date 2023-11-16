import { Table, TableProps } from "antd";
interface MyTableProps extends TableProps<any> {
  children?: React.ReactNode;
}
const TableMain = ({ children, ...rest }: MyTableProps) => {
  return <Table {...rest}>{children}</Table>;
};

export { TableMain };
