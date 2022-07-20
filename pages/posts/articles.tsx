import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import Blog, { IBlog } from "../../utils/components/blog/blog";
import Navbar from "../../utils/components/navbar";

export default function Articles() {
    const [Articles, setArticles] = useState<IBlog[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        // get latest 10 posts from `posts` firestore collection
        getDocs(collection(getFirestore(), "posts")).then((snap) => {
            let docs = snap.docs.map((doc) => doc.data());
            setArticles(docs as IBlog[]);
            setIsLoading(false);
        });
    }, []);
    useEffect(() => console.log(Articles), [Articles]);
    return (
        <>
            <Navbar />
            <div
                className="dark:bg-slate-800 dark:text-slate-300"
                style={{ height: "inherit" }}
            >
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
                            <Blog
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
        </>
    );
}
