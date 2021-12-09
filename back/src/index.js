import app from "./app.js";

let PORT = app.get("port");
app.listen(PORT);

console.log("running server on port ", PORT);
