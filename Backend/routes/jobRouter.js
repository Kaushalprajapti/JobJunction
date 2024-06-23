import express from "express";
import {getAllJobs,postJob,getmyjobs,updateJob,deleteJob,getSingleJob} from "../controller/jobController.js";
import {isAuthenticated} from "../middlewares/auth.js"

const router = express.Router();

router.get('/getall',getAllJobs);
router.post("/post",isAuthenticated,postJob);
router.get("/getmyjobs",isAuthenticated,getmyjobs);
router.put("/update/:id",isAuthenticated,updateJob)
router.delete("/delete/:id",isAuthenticated,deleteJob);
router.delete("/:id",isAuthenticated,getSingleJob);

export default router;