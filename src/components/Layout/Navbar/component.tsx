import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
	const router = useRouter();

	return (
		<div className='flex'>
			<ul className='flex w-full justify-around items-center'>
				<li
					className={`text-lg ${
						router.asPath === '/' ? 'text-white border-b' : 'text-gray-400'
					}`}
				>
					<Link href='/'>
						<a>Cutest</a>
					</Link>
				</li>
				<li
					className={`text-lg ${
						router.asPath === '/leaderboard'
							? 'text-white border-b'
							: 'text-gray-400'
					}`}
				>
					<Link href='/leaderboard'>
						<a>Leaderboard</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
