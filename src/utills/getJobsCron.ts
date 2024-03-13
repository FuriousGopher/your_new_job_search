import axios from "axios";
import {Jobs} from "../DB/models/Jobs";


async function fetchAndSaveJobs() {
    try {
        const response = await axios.get('https://jobicy.com/api/v2/remote-jobs');
        const jobListings = response.data.jobs;

        for (const job of jobListings) {
            await Jobs.create({
                url: job.url,
                jobTitle: job.jobTitle,
                companyName: job.companyName,
                companyLogo: job.companyLogo,
                jobIndustry: job.jobIndustry[0],
                jobType: job.jobType[0],
                jobGeo: job.jobGeo,
                jobLevel: job.jobLevel,
                jobExcerpt: job.jobExcerpt,
                jobDescription: job.jobDescription,
                pubDate: new Date(job.pubDate),
            });
        }
        console.log('Job listings saved successfully.');
    } catch (error) {
        console.error('Error fetching or saving job listings:', error);
    }
}

export default fetchAndSaveJobs;
