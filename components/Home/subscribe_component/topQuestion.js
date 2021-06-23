import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
const topQuestion = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className='flex flex-col border-b-2 border-blue-400 border-opacity-50'>
			<div className='flex flex-row content-center justify-between text-gray-900 text-center bg-blue-200 px-4 py-2'>
				<div>
					<span className='text-2xl'>Title of the question</span>
				</div>
				<div>
					{open === false ? (
						<button
							id='the_mobile_icon_navbar_button'
							onClick={() => setOpen(!open)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M19 9l-7 7-7-7'
								/>
							</svg>
						</button>
					) : (
						<button
							id='the_mobile_icon_navbar_button'
							onClick={() => setOpen(!open)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M5 15l7-7 7 7'
								/>
							</svg>
						</button>
					)}
				</div>
			</div>
			{open && (
				<>
					<div className='flex flex-row content-center bg-blue-200 px-4 py-2'>
						<p className='text-base text-gray-900 text-justify'>
							This is small answerThis is small answerThis is small answer This
							is small answer This is small answer This is small answer This is
							small answer This is small answer This is small answer This is
							small answer This is small answer This is small answer This is
							small answer This is small answer lorem ipsum
						</p>
					</div>
				</>
			)}
		</div>
	);
};

export default topQuestion;
