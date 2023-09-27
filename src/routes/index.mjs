import user_route from "./user_route.mjs";

export default [
  {
    method: "GET",
    path: "/user",
    callback: user_route.get,
  },
  {
    method: "POST",
    path: "/user",
    callback: user_route.post,
  },
  {
    method: "PUT",
    path: "/user/:id",
    callback: user_route.put,
  },
];
