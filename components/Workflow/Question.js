import React from 'react';

const Question = () => {
	return (
		<div className='p-3 w-400 border-2'>
			<p className='montserrat-14'>Question to list here in 1-2 lines?</p>
			<p className='montserrat-12'>
				2 lines of question is quoted in 2 point small font than font used in
				question and 3 dots added …
			</p>
			<p className='montserrat-10 mt-7'>Posted by: fhfyeifjr23</p>
			<div className='flex justify-between montserrat-10 '>
				<div className='grid grid-cols-3'>
					<p>views</p>
					<p>likes</p>
					<p>comments</p>
				</div>
				<div>
					<p>today</p>
				</div>
			</div>
		</div>
	);
};

export default Question;
