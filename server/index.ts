import express from "express";
import cors from "cors";

const PORT = process.env.PORT || "3000";

const server = express();
server.use(cors());
server.use(express.json());

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
