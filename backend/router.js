import { Router } from "express";

import * as ctrl from "./Controller/todo.controller.js";
const router = Router();
router.route("/addtodo").post(ctrl.addTodo)
router.route("/gettodos").post(ctrl.getTodos)


export default router;