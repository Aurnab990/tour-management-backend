import express, { Request, Response } from "express";
import { userRoutes } from "./app/user/user.route";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRoutes);

app.get('/', async(req: Request, res: Response) => {
    res.status(201).json({
        message: "Welcome to Tour management home-page"
    })
});

export default app;