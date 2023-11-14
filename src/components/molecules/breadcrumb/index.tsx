import { Breadcrumb as AntdBreactcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const { Item } = AntdBreactcrumb;
  console.log(pathSnippets);

  const breadcrumbItems = pathSnippets.map((snippet, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    console.log(pathSnippets.length, index + 1);
    return (
      <Item key={url}>
        <Link
          to={url}
          className={`${
            pathSnippets.length === index + 1 && "!text-black font-semibold"
          }`}
        >
          {snippet}
        </Link>
      </Item>
    );
  });

  return (
    <AntdBreactcrumb style={{ margin: "16px 0" }}>
      {breadcrumbItems.length > 0 ? (
        <Item key="home">
          <Link to="/">Home</Link>
        </Item>
      ) : null}
      {breadcrumbItems}
    </AntdBreactcrumb>
  );
};

export { Breadcrumb };
