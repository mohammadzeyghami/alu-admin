const Routes = {
  dashboard: {
    root: "/dashboard",

    posts: {
      root: "/dashboard/posts",
      edit: "/dashboard/posts/edit",
      add: "/dashboard/posts/add",
    },
    categories: {
      root: "/dashboard/categories",
      edit: "/dashboard/categories/edit",
      add: "/dashboard/categories/add",
    },
    products: {
      root: "/dashboard/products",
      edit: "/dashboard/products/edit",
      add: "/dashboard/products/add",
    },
    setting: {
      root: "/dashboard/settings",
    },
  },
};

export default Routes;
