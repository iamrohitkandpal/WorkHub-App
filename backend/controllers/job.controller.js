import { Job } from '../models/job.model.js'

export const postJob = async (req, res) => {
    try {
        const {title, description, requirements, salary, location, jobType, experience, position, companyId} = req.body;
        const userId =  req.id;

        if(!title || !description || !requirements || !salary || !location || !companyId || !jobType || !experience || !position) {
            return res.status(400).json({
                message: "All fields are required",
                success: false,
            });
            const job = await Job.create({
                title,
                description,
                requirements: requirements.split(","),
                salary: Number(salary),
                location,
                jobType,
                experienceLevel: experience,
                position,
                company: companyId,
                created_by: userId,
            });

            return res.status(201).json({
                message: "New Job created successfully",
                success: true,
                job,
            });
        }
    } catch (error) {
        console.log(error);
        
    }
}

export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or:[
                {title: {$regex:keyword, $options:"i"}},
                {description: {$regex:keyword, $options:"i"}},
            ]
        };
        const jobs =  await Job.find(query);
        if(!jobs){
            return res.status(404).json({
                message: "No jobs found",
                success: false,
            });
        };

        return res.status(200).json({
            jobs,
            success: true,
        })
    } catch (error) {
        console.log(error);
        
    }
}