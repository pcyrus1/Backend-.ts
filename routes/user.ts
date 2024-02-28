import { Router } from "express";
const router = Router();

import {
  addUser,
  getUsers,
  getsingleUser,
  deleteUser,
  updatUser,
} from "../controller/users";

router.route("/").post(addUser).get(getUsers);

router.route("/:id").get(getsingleUser).put(updatUser).delete(deleteUser);

export default router;
