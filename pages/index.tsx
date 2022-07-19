import type { NextPage } from "next";
import Blog from "../utils/components/blog/blog";
import Navbar from "../utils/components/navbar";

const Home: NextPage = () => {
    return (
        <>
            <Navbar />
            <Blog title="hi" content="hello" author="kimlimjustin" createdAt="just now"/>
        </>
    );
};

export default Home;
