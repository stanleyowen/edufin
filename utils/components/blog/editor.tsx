import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const BlogEditor = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    return (
        <Editor
            editorState={editorState}
            onEditorStateChange={(e) => setEditorState(e)}
        />
    );
};
export default BlogEditor;
