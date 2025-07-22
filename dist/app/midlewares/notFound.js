"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundRoute = void 0;
exports.notFoundRoute = ((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});
