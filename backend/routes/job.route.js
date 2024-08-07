import express from 'express';
import { postJob, getAllJobs, getJobById, getAdminJobs } from "../controllers/job.controller.js";
import isAuthenticated from '../middlewares/isAuthenticated.js';

const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").post(isAuthenticated, getAllJobs);
router.route("/getadminjobs").get(isAuthenticated, getAdminJobs);
router.route("/get/:id").post(isAuthenticated, getJobById);


export default router;