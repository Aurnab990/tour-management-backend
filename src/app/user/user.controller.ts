import { Request, Response } from "express";
import { User } from "./user.model";

const createUser = async(req: Request, res: Response) => {
    try {
        const {name, email} = req.body;
        const user = await User.create({
            name,
            email
        });
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        })

    } catch (error: any) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: `Something went wrong ${error.message}`
        });
    }
}

export const userController = {
    createUser,
}