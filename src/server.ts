import express from "express";
import { router } from "./routes";
import path from 'path'

const app = express()

app.use(express.json())
app.use(router);
app.use("/images", express.static(path.join(__dirname, "..", "images")));

const PORT = 3333

app.listen(PORT, () => console.log('Listening on port', + PORT))