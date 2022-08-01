import React from 'react';

const Navbar: React.FC = () => {
	return (
		<div className='flex'>
			<ul className='flex w-full justify-around items-center'>
				<li className='text-lg'>Cutest</li>
				<li className='text-lg'>Leaderboard</li>
			</ul>
		</div>
	);
};

export default Navbar;
