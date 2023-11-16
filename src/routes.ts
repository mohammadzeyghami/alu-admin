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
    users: {
      root: "/dashboard/users",
      edit: "/dashboard/users/edit",
      add: "/dashboard/users/add",
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
  login: {
    root: "/login",
  },
  signIn: {
    root: "/sign-in",
  },
};

export default Routes;
