import { useRouter } from "next/router";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import Blog, { IBlog } from "../../utils/components/blog/blogs";
import Navbar from "../../utils/components/navbar";

const Article = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [post, setPost] = useState<IBlog>({
        id: "",
        title: "",
        content: "",
        email: "",
        createdAt: "",
    });
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        getDoc(doc(getFirestore(), `posts/${id}`)).then((snap: any) => {
            if (snap.exists()) {
                setPost(Object.assign(snap.data(), { id: snap.id }));
                setIsLoading(false);
            }
        });
    }, []);

    return (
        <>
            <Navbar />
            <div className="dark:bg-slate-800 dark:text-slate-300">
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
                    <Blog
                        id={post.id}
                        key={post.createdAt}
                        title={post.title}
                        content={post.content}
                        email={post.email}
                        createdAt={post.createdAt}
                    />
                )}
            </div>
        </>
    );
};

export default Article;
