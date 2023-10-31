import { Application,Request, Response } from "express";
import student from './router/studentRouter'
import { statusCode } from "./utils/statusCode";

export const mainApp = (app:Application)=>{
        app.use('/api/v2', student)

        app.get('/', (req:Request, res:Response)=>{
            try {
                res.status(statusCode.OK).json({
                    message: 'Welcome to our register'
                })
            } catch (error) {
                return res.status(statusCode.BAD_REQUEST).json({
                    message: 'Error'
                })
            }
        });
}