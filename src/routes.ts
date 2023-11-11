const Routes = {
  dashboard: {
    root: "/home",

    posts: {
      root: "/posts",
      edit: "/posts/edit",
      add: "/posts/add",
      remove: "/posts/remove",
    },
    categories: {
      root: "/categories",
      edit: "/categories/edit",
      add: "/categories/add",
      remove: "/categories/remove",
    },
    products: {
      root: "/products",
      edit: "/products/edit",
      add: "/products/add",
      remove: "/products/remove",
    },
    setting: {
      root: "/setting",
    },
  },
};

export default Routes;
