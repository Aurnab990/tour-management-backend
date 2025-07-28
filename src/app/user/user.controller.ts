import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";
import { catchAsync } from "../utils/catchAsync";
import { StatusCodes } from "http-status-codes";
import { sendResponse } from "../utils/sendResponse";
// import appError from "../errorhalpers/appError";


//WITH TRY CATCH

// const createUser = async(req: Request, res: Response, next: NextFunction) => {
//     try {
//         // throw new appError(400,"fake error");
//        const user = await userService.createUser(req.body);
//         res.status(201).json({
//             success: true,
//             message: "User created successfully",
//             user
//         })

//     } catch (error: any) {
//         console.log(error);
//         // next(error);
//     }
// }

//WITHOUT TRY CATCH

const createUser = catchAsync(async(req: Request, res: Response, next: NextFunction)=>{
    const user = await userService.createUser(req.body);
    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.CREATED,
        message: "User created successfully",
        data: user,

    })
});

//WITH TRY CATCH
// const getAllUsers = async(req: Request, res: Response, next: NextFunction)=>{
//     try {
//         const users = await userService.getAllUsers();
//         return users;
//     } catch (error) {
//         console.log("All users not found", error);
//         // next(error);
//     }
// }

//WITHOUT TRY CATCH

const getAllUsers = catchAsync (async(req: Request, res: Response, next: NextFunction)=>{
    const result = await userService.getAllUsers();

    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.ACCEPTED,
        message: "All user retrived successfully",
        data: result.data,
        meta: result.meta,
    })
})
export const userController = {
    createUser,
    getAllUsers
}