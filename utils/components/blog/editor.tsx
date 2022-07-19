import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const BlogEditor = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    return (
        <>
            <Editor
                editorState={editorState}
                onEditorStateChange={(e) => setEditorState(e)}
                wrapperClassName="bg-slate-400"
                toolbarClassName="bg-slate-400"
            />
            <div className="flex justify-end" style={{ margin: "2% 10% 0 0" }}>
                <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => (window.location.href = "/")}
                >
                    Cancel
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ml-10">
                    Save
                </button>
            </div>
        </>
    );
};
export default BlogEditor;
