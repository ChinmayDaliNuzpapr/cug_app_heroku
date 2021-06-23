import React from 'react';
import MyEditor from './MyEditor';
import Button from '../Button/Button';

const PostComment = () => {
	return (
		<div className='border-2 p-4 montserrat-12'>
			<div className='m'>
				<p>You are replying to....</p>
				<p>Question to list here in full line till the end of this column…..</p>
			</div>

			<div className='mt-12 '>
				<div className='my-3'>
					<MyEditor />
				</div>

				<div className='my-3 flex justify-end'>
					<Button />
				</div>
			</div>
		</div>
	);
};

export default PostComment;
