import React from 'react';

import Navbar from './Navbar';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className='grid grid-cols-1 grid-rows-[80px] min-h-screen'>
			<Navbar />
			<div className='container mx-auto px-16 flex justify-center'>
				{children}
				<h4 className='text-white text-xl font-bold fixed bottom-5'>
					<a href='https://github.com/jaysonacosta/cutemon'>GitHub</a>
				</h4>
			</div>
		</div>
	);
};

export default Layout;
