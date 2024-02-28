import User from "../models/User";
import { NextFunction, Request, Response } from "express";

export const addUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, firstName, lastName } = req.body;

    const order = await User.create({
      id,
      firstName,
      lastName,
    });
    return res.status(201).json({
      success: true,
      data: order,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// Get all Menus
export const getUsers = async (req: Request, res: Response) => {
  try {
    const orders = await User.findAll({});

    if (orders.length === 0) {
      return res.status(401).json({
        success: false,
        message: "No user records found",
      });
    }

    res.status(200).json({
      data: orders,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// Get a single Menu by ID
export const getsingleUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const order = await User.findOne({
      where: { id: String(id) },
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "User record does not exist",
      });
    }

    res.status(200).json({
      data: order,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// Update a menu by ID
export const updatUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updatedOrder = await User.update(req.body, {
      where: { id: String(id) },
    });
    if (updatedOrder)
      res.status(200).json({
        success: true,
        message: "User record updated successfully",
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// Delete a Menu by ID
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deleteOrder = await User.destroy({
      where: { id: String(id) },
    });

    if (deleteOrder === 0) {
      return res.status(404).json({
        success: false,
        message: "User record not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User record deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
