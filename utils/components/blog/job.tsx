import React from "react";

export interface IJob {
    title: string;
    company: string;
    description: string;
    link: string;
}

export default function Job(data: IJob) {
    return (
        <>
            <a className="m-5 shadow-md py-3 px-10" href={data.link}>
                <h1 className="font-medium leading-tight text-3xl mt-0">
                    {data.title}
                </h1>
                <span className="text-gray-400">
                    {data.company} ⋄ {data.link}
                </span>
                <div className="mt-3">{data.description}</div>
            </a>
        </>
    );
}
