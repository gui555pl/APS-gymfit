import "dotenv/config";
import "express-async-errors";
import "reflect-metadata";

import App from "./app";

const PORT = process.env.PORT || 3334;

const app = new App();
const server = app.getServer();

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
