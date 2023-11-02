import { Router } from "express";
import { createRecord, deleteRecord, getRecord, getRecordbyCourse, getRecordbyName, getRecordbyScore, updateRecord } from "../controller/studentController";

const router:Router = Router()

router.route ('/create-record').post(createRecord)
router.route('/check-records').get(getRecord)
router.route('/check-recordbyName').get(getRecordbyName)
router.route('/check-recordbyCourse').get(getRecordbyCourse)
router.route('/check-recordbyScore').get(getRecordbyScore)
router.route('/update-record').patch(updateRecord)
router.route('/delete-record').patch(deleteRecord)

export default router;