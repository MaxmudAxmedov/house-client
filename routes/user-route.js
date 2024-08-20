import express from "express";
import { test, todo } from "../controller/user.controller.js";

const router = express.Router()

router.get('/test', test);
router.post('/test', todo);


export default router;
