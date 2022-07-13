import dynamic from "next/dynamic";
import Navbar from "../../utils/components/navbar";

const BlogEditor = dynamic(() => import("../../utils/components/blog/editor"), {
    ssr: false,
});

export default function write() {
    return (
        <>
            <Navbar />
            <BlogEditor />
        </>
    );
}
