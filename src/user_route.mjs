import { AppRouter } from "./app_route.mjs";

const users = [];

class UseRouter extends AppRouter {
  get(req, res) {
    res.write("Hello User");
    res.end();
  }

  post(req, res) {
    users.push(req.body);

    res.write(JSON.stringify(users));
    res.end();
  }
}

export default new UseRouter();
