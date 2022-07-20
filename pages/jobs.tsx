import { useState, useEffect } from "react";
import axios from "axios";
import Job from "../utils/components/blog/job";
import Navbar from "../utils/components/navbar";

export default function SignIn() {
    const [jobs, setJobs] = useState([
        {
            title: "Senior Manager",
            company: "Google",
            description: "Hello World",
            link: "http://localhost:3000/jobs",
        },
    ]);

    useEffect(() => {
        axios
            .get("https://google.com") // Jobs API
            .then((res) => {
                setJobs(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    function JobList() {
        return jobs.map((job) => {
            return (
                <Job
                    key={job.title}
                    title={job.title}
                    company={job.company}
                    description={job.description}
                    link={job.link}
                />
            );
        });
    }
    return (
        <>
            <Navbar />
            <h1 className="font-medium leading-tight text-3xl mt-0 px-10 py-2">
                Jobs
            </h1>
            {JobList()}
        </>
    );
}
