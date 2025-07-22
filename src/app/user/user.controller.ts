import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";
import AppError from "../errorhalpers/appError";

const createUser = async(req: Request, res: Response, next: NextFunction) => {
    try {
        throw new AppError(400,"fake error");
       const user = await userService.createUser(req.body);
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        })

    } catch (error: any) {
        console.log(error);
        next(error);
    }
}

export const userController = {
    createUser,
}