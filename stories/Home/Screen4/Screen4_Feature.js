import React from 'react';
import image from '../../../public/banner.png';
import Image from 'next/image';
const Screen4_Feature = () => {
	return (
		<div className='text-center text-align: center '>
			<img className='m-auto  auto w-100' src={image} />
			<p className='montserrat-18 text-lg font-size: 1.125rem'>
				<span>How 1</span>
			</p>
			<p className='montserrat-12'>2 lines of text </p>
		</div>
	);
};

export default Screen4_Feature;
