import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import Blogs, { IBlog } from "../../utils/components/blog/blogs";
import Navbar from "../../utils/components/navbar";

export default function Articles() {
    const [Articles, setArticles] = useState<IBlog[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        // get latest 10 posts from `posts` firestore collection
        getDocs(collection(getFirestore(), "posts")).then((snap) => {
            let docs = snap.docs.map((doc) => {
                // trim the content to only show the first 40 words
                let content = doc.data().content;
                content = content
                    .split(" ")
                    .slice(0, 40)
                    .join(" ")
                    .concat("...");

                return Object.assign(doc.data(), {
                    id: doc.id,
                    content,
                });
            });
            setArticles(docs as IBlog[]);
            setIsLoading(false);
        });
    }, []);
    console.log(Articles);
    useEffect(() => console.log(Articles), [Articles]);
    return (
        <>
            <Navbar />
            <div
                className="dark:bg-slate-800 dark:text-slate-300"
                style={{ flex: "1" }}
            >
                <div style={{ maxWidth: "800px", margin: "auto" }}>
                    {isLoading ? (
                        <div className="flex justify-center">
                            <div
                                className="spinner-border text-primary"
                                role="status"
                            >
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        Articles?.map((element) => {
                            return (
                                <Blogs
                                    id={element.id}
                                    key={element.createdAt}
                                    title={element.title}
                                    content={element.content}
                                    email={element.email}
                                    createdAt={element.createdAt}
                                />
                            );
                        })
                    )}
                </div>
            </div>
        </>
    );
}
