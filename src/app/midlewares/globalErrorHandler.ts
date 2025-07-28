import { NextFunction, Request, Response } from "express";
import appError from "../errorhalpers/appError";
import { StatusCodes } from "http-status-codes";



export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) =>{
    let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    let message = `Something went wrong: ${err}`;

    if(err instanceof appError){
        statusCode = err.statusCode;
        message = err.message;
    }else{
        statusCode = statusCode;
        message = err.message;
    }
    res.status(statusCode).json({
        success: false,
        message,
        err,
        stack: err.stack
    });
}