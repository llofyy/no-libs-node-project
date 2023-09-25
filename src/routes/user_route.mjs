import { AppRouter } from "./app_route.mjs";

const users = [];

class UseRouter extends AppRouter {
  get(req, res) {
    res.send(users);
  }

  post(req, res) {
    const user = {
      id: users.length + 1,
      ...req.body,
    };

    users.push(user);

    res.send(user);
  }
}

export default new UseRouter();
