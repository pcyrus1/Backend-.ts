import { NextFunction, Request, Response } from "express";
import Course from "../models/Course";

// Create a course
export const createCourse = async (req: Request, res: Response) => {
  try {
    const createdCourse = await Course.create(req.body);
    res.status(201).json({ success: true, message: "Course created successfully", data: createdCourse });
  } catch (error) {
    return res.status(400).json(error);
  }
};

// Get all courses
export const getAllCourses = async (req: Request, res: Response) => {
  const allCourses = await Course.findAll();
  if (!allCourses) {
    return res.status(404).json({ success: false, message: "No student found...⛔" });
  }
  res.status(200).json({ success: true, data: allCourses });
};
