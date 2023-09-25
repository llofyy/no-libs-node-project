import http from "http";
import routes_list from "./routes/index.mjs";

const app = http.createServer((req, res) => {
  const router = routes_list.find(
    (route) => route.method === req.method && route.path === req.url
  );

  let data = "";
  req.on("data", (chunk) => {
    data += chunk;
  });
  req.on("end", () => {
    req.body = data ? JSON.parse(data) : data;

    res.send = (value) => {
      if (typeof value === "object") {
        res.write(JSON.stringify(value));
        res.end();
      } else {
        res.write(value);
        res.end();
      }
    };

    if (router) {
      router.callback(req, res);
    } else {
      res.send(`Cannot ${req.method} ${req.url}`);
    }
  });
});

app.listen(3333, () => console.log("App is running"));
