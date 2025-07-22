"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const appError_1 = __importDefault(require("../errorhalpers/appError"));
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = `Something went wrong: ${err}`;
    if (err instanceof appError_1.default) {
        statusCode = err.statusCode;
        message = err.message;
    }
    else {
        statusCode = 500;
        message = err.message;
    }
    res.status(statusCode).json({
        success: false,
        message,
        err,
        stack: err.stack
    });
};
exports.globalErrorHandler = globalErrorHandler;
