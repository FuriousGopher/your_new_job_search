import {Jobs} from "../DB/models/Jobs";

export class JobsService {
    static async getJobs() {
        try {
            return await Jobs.findAll();
        } catch (error) {
            console.error('Error getting all jobs:', error);
            throw new Error('Failed to get all jobs');
        }
    }

    static async getJob(jobId: number) {
        try {
            const job = await Jobs.findByPk(jobId);
            if (!job) {
                throw  new Error('Job not found');
            }
            return job;
        } catch (error) {
            throw new Error('Failed to get job by ID');
        }
    }

    static async deleteJobById(jobId: string) {
        try {
            const deletedRows = await Jobs.destroy({
                where: {
                    id: jobId
                }
            });
            if (deletedRows === 0) {
                throw  new Error('Job not found');
            }
            return { success: true };
        } catch (error) {
            throw new Error('Failed to delete job by ID');
        }
    }

    static async updateJobById(jobId: string, updatedJobData: any) {
        try {
            const [updatedRows] = await Jobs.update(updatedJobData, {
                where: {
                    id: jobId
                }
            });
            if (updatedRows === 0) {
                throw  new Error('Job not found');
            }
            return { success: true };
        } catch (error) {
            throw new Error('Failed to update job by ID');
        }
    }
}
