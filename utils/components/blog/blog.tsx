import React from 'react';

export interface IBlog{
    title: string;
    content: string;
    author: string;
    createdAt: string;
    modifiedAt?: string;
}

export default function Blog(data: IBlog){
    return (
        <div className="blog">
            <h1 className='blog-title'>{data.title}</h1>
            <span className='blog-metadata'>{data.author} ⋄ {data.modifiedAt ?? data.createdAt}</span>
            <div className='blog-content'>
                {data.content}
            </div>
        </div>
    )
}