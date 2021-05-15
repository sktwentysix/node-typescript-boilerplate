import { Request, Response, NextFunction } from "express";

export class MyFeatureController {
    async request(request: Request, response: Response, next: NextFunction): Promise<any> {
        return "My Response!"
    }
}