import React from "react";

export interface IBlog {
    title: string;
    content: string;
    author: string;
    createdAt: string;
    modifiedAt?: string;
}

export default function Blog(data: IBlog) {
    return (
        <div className="m-5 shadow-md py-3 px-10">
            <h1 className="font-medium leading-tight text-4xl mt-0">
                {data.title}
            </h1>
            <span className="text-gray-400">
                {data.author} ⋄ {data.modifiedAt ?? data.createdAt}
            </span>
            <div className="mt-3">{data.content}</div>
        </div>
    );
}
