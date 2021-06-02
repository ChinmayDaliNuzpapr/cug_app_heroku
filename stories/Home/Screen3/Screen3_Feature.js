import React from 'react';
import '../../../styles/globals.css';
import image from '../../../public/banner.png';

const Screen3_Feature = () => {
	return (
		<div>
			<div className='flex justify-evenly'>
				<div className='margin_auto'>
					<img className=' w-50 h-50' src={image} />
				</div>

				<p className=' montserrat-18 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl '>
					Title 3-1
				</p>
			</div>
			<p className=' montserrat-12 text-xs md:text-tiny lg:text-base xl:text-lg'>
				2-3 lines of text
			</p>
		</div>
	);
};

export default Screen3_Feature;
