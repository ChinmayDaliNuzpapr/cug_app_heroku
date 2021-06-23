import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const MyEditor = () => {
	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty()
	);
	console.log(editorState);
	return (
		<div className='h-[200px] border-2'>
			<Editor editorState={editorState} onEditorStateChange={setEditorState} />
		</div>
	);
};
export default MyEditor;
