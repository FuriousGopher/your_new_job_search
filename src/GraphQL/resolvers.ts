import {JobsService} from "../services/jobs.service";
import {Jobs} from "../DB/models/Jobs";

export const resolvers = {
  Query: {
    getJobById: (_: any, { id }: { id: string }) => JobsService.getJob(Number(id)),
    getAllJobs: async (): Promise<Jobs[]> => (await JobsService.getJobs()).map(job => job.toJSON())
  },
};
