import { AppRouter } from "./app_route.mjs";

const users = [];

class UseRouter extends AppRouter {
  get(req, res) {
    res.json(users);
  }

  post(req, res) {
    const user = {
      id: users.length + 1,
      ...req.body,
    };
    users.push(user);
    res.json(user);
  }
}

export default new UseRouter();
