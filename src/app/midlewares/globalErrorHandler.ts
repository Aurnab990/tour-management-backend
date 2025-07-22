import { NextFunction, Request, Response } from "express";
import AppError from "../errorhalpers/appError";


export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) =>{
    let statusCode = 500;
    let message = `Something went wrong: ${err}`;

    if(err instanceof AppError){
        statusCode = err.statusCode;
        message = err.message;
    }else{
        statusCode = 500;
        message = err.message;
    }
    res.status(statusCode).json({
        success: false,
        message,
        err,
        stack: err.stack
    });
}