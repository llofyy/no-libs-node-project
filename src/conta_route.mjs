import { AppRouter } from "./app_route.mjs";

class ContaRouter extends AppRouter {
  get(req, res) {
    res.write("Hello Conta");
    res.end();
  }
}

export default new ContaRouter();
