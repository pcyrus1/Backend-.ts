import { NextFunction, Request, Response } from "express";
import Student from "../models/Student";

// Create a student
export const createStudent = async (req: Request, res: Response) => {
  try {
    const createdStudent = await Student.create(req.body);
    res.status(201).json({ success: true, message: "Student created successfully", data: createdStudent });
  } catch (error) {
    return res.status(400).json(error);
  }
};

// Get all students
export const getAllStudents = async (req: Request, res: Response) => {
  try {
    const allStudents = await Student.findAll();
    if (!allStudents) {
      return res.status(404).json({ success: false, message: "No student found...⛔" });
    }
    res.status(200).json({ success: true, data: allStudents });
  } catch (error) {
    return res.status(400).json(error);
  }
};
