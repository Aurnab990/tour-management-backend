import { NextFunction, Request, Response } from "express";

// TRY CATCH RESOLVING - higher order function
type asyncType = (req: Request, res: Response, next: NextFunction) => Promise<void>

export const catchAsync = (fn: asyncType) => (req: Request, res: Response, next: NextFunction)=>{
    Promise.resolve(fn(req,res,next)).catch((error: any)=>{
        console.log("Error:",error);
        next(error);
    })
}