import { Request, Response } from "express";
import { statusCode } from "../utils/statusCode";
import { client, db } from "../utils/dbConfig";
import { studentModel } from "../model/studentModel";
import { ObjectId } from "mongodb";


export const createRecord = async (req: Request, res: Response) => {
    try {
        await client.connect()

        const { name, course, department, score } = req.body;

        const student = new studentModel(name, course, department, score);
         db.insertOne(student);
        

        return res.status(statusCode.OK).json({
            message: 'student created',
            data: student
        })


    } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: 'Error'
        })
    }
}

export const getRecord = async (req: Request, res: Response) => {
    try {
        await client.connect()

       const student =await db.find().toArray()

        return res.status(statusCode.OK).json({
            message: 'student records found',
            data: student
        })


    } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: 'Error'
        })
    }
}

export const getRecordbyName = async (req: Request, res: Response) => {
    try {
        await client.connect()

        const {name} = req.body

       const student = await db.findOne({_id: new ObjectId(name)})

        return res.status(statusCode.OK).json({
            message: 'student records found with ID',
            data: student
        })


    } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: 'Error'
        })
    }
}

export const getRecordbyCourse = async (req: Request, res: Response) => {
    try {
        await client.connect()

        const {course} = req.body

       const student =  await db.find({course}).toArray()

        return res.status(statusCode.OK).json({
            message: 'student records found by course',
            data: student
        })


    } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: 'Error'
        })
    }
}
export const getRecordbyScore = async (req: Request, res: Response) => {
    try {
        await client.connect()

        const {score} = req.body

       const student =  await db.find({score}).toArray()

        return res.status(statusCode.OK).json({
            message: 'student records found by score',
            data: student
        })


    } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: 'Error'
        })
    }
}
export const updateRecord = async (req: Request, res: Response) => {
    try {
        await client.connect()

        const {studentID} = req.params
        const {course} = req.body
        const {score} = req.body

       const student =  await db.updateOne({_id: new ObjectId(studentID)}, {$set: {course, score}})

        return res.status(statusCode.OK).json({
            message: 'student record updated',
            data: student
        })


    } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: 'Error'
        })
    }
}
export const deleteRecord = async (req: Request, res: Response) => {
    try {
        await client.connect()

        const {studentID} = req.params
       

       const student =  await db.deleteOne({_id: new ObjectId(studentID)})

        return res.status(statusCode.OK).json({
            message: 'student record updated',
            data: student
        })


    } catch (error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message: 'Error'
        })
    }
}