import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { router } from "./app/routes";
import { globalErrorHandler } from "./app/midlewares/globalErrorHandler";
import { notFoundRoute } from "./app/midlewares/notFound";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

app.get('/', async(req: Request, res: Response) => {
    res.status(201).json({
        message: "Welcome to Tour management home-page"
    })
});

app.use(globalErrorHandler);
app.use(notFoundRoute);


export default app;