"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("./user.service");
const catchAsync_1 = require("../utils/catchAsync");
const http_status_codes_1 = require("http-status-codes");
const sendResponse_1 = require("../utils/sendResponse");
// import appError from "../errorhalpers/appError";
//WITH TRY CATCH
// const createUser = async(req: Request, res: Response, next: NextFunction) => {
//     try {
//         // throw new appError(400,"fake error");
//        const user = await userService.createUser(req.body);
//         res.status(StatusCodes.CREATED).json({
//             success: true,
//             message: "User created successfully",
//             user
//         })
//     } catch (error: any) {
//         console.log(error);
//         next(error);
//     }
// }
//WITHOUT TRY CATCH
const createUser = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_service_1.userService.createUser(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        message: "User created successfully",
        data: user,
    });
}));
//WITH TRY CATCH
// const getAllUsers = async(req: Request, res: Response, next: NextFunction)=>{
//     try {
//         const users = await userService.getAllUsers();
//         return users;
//     } catch (error) {
//         console.log("All users not found", error);
//         next(error);
//     }
// }
//WITHOUT TRY CATCH
const getAllUsers = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.userService.getAllUsers();
    // res.status(201).json({
    //     success: true,
    //     message: "User created succesfully",
    //     data: users
    // })
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_codes_1.StatusCodes.ACCEPTED,
        message: "All user retrived successfully",
        data: result.data,
        meta: result.meta,
    });
}));
exports.userController = {
    createUser,
    getAllUsers
};
