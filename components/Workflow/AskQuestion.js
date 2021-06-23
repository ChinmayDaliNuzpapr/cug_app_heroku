import React from 'react';
import MyEditor from './MyEditor';
import Button from '../Button/Button';

const AskQuestion = () => {
	return (
		<div className='border-2 p-4 montserrat-12'>
			<div className='my-3'>
				<input
					className='w-100 border-2 h-[50px]'
					placeholder='Title of the Question is to be placed here'
				/>
			</div>

			<div className='my-3'>
				<MyEditor />
			</div>

			<div className='my-3 flex justify-end'>
				<Button />
			</div>
		</div>
	);
};

export default AskQuestion;
