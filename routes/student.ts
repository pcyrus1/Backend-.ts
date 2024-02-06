import { Router } from "express";
import { createStudent, getAllStudents } from "../controller/student";

const router = Router();

router.route("/").post(createStudent).get(getAllStudents);

export default router;
