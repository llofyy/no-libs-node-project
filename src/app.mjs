import http from "http";
import routes_list from "./routes/index.mjs";

const app = http.createServer((req, res) => {
  console.log(req.url);
  const router = routes_list.filter((route) => route.method === req.method);

  const selectedRouter = router.find((route) =>
    route.path.includes(req.url.split("/")[1])
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

    if (selectedRouter) {
      if (req.url.split("/")[2]) {
        if (selectedRouter.path.includes(":")) {
          req.params = JSON.parse(
            `{"${selectedRouter.path.split(":")[1]}": "${
              req.url.split("/")[2]
            }"}`
          );
        }
      }
      selectedRouter.callback(req, res);
    } else {
      res.send(`Cannot ${req.method} ${req.url}`);
    }
  });
});

app.listen(3333, () => console.log("App is running"));
