import React from 'react';
import Hero from './Home/Hero_component/Hero';
import Footer from './Home/Screen1_Footer/Footer';
import Screen3 from './Home/Screen3/Screen3';
import TopQuestion from './Home/subscribe_component/topQuestion';
import Subscribe from './Home/subscribe_component/subscribe';
import Title2 from './Home/Title_two_comp/title2';
import Screen4 from './Home/Screen4/Screen4';
import Index from './Home/accordian';

function HomePage() {
	console.log('THE HOMEPAGE COMPONENT');
	return (
		<div id='homePage' className='grid grid-cols-1 gap-4'>
			<div className='my-10'>
				<Hero />
			</div>
			{/* Title-1 component */}
			<div className='my-10 bg-blue-200 '>
				<Footer />
			</div>
			<div className='my-10'>
				<Title2 />
			</div>
			{/* Title-3 component */}
			<div className='my-10 bg-blue-200 '>
				<Screen3 />
			</div>
			{/* Title-3 ==> How it works */}
			<div className='my-10 bg-blue-200 '>
				<Screen4 />
			</div>
			{/* Top Questions component */}
			<div className='my-10 bg-blue-200 '>
				<div className='container m-auto md:container md:mx-auto'>
					{/* <Index /> */}
					<TopQuestion />
					<TopQuestion />
					<TopQuestion />
					<TopQuestion />
				</div>
			</div>
			{/* Top Questions component */}
			<div className='my-10 bg-blue-200 '>
				<Subscribe />
			</div>
		</div>
	);
}

export default HomePage;
