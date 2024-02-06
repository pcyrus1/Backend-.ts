import { Router } from "express";
import { createCourse, getAllCourses } from "../controller/course";
const router = Router();

router.route("/").post(createCourse).get(getAllCourses);

export default router;
