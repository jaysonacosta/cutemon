import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<div className='container mx-auto px-16 flex justify-evenly items-center min-h-screen'>
			<div className='pokemon-card flex flex-col items-center'>
				<div className='image w-52 h-52 bg-white'></div>
				<div className='p-2'></div>
				<p className='text-base text-bold'>Name</p>
				<div className='p-2'></div>
				<button className='bg-zinc-900 p-2 px-6 rounded hover:bg-zinc-800 active:bg-zinc-700'>
					Cuter
				</button>
			</div>
			<p className='text-base text-bold'>vs</p>
			<div className='pokemon-card flex flex-col items-center'>
				<div className='image w-52 h-52 bg-white'></div>
				<div className='p-2'></div>
				<p className='text-base text-bold'>Name</p>
				<div className='p-2'></div>
				<button className='bg-zinc-900 p-2 px-6 rounded hover:bg-zinc-800 active:bg-zinc-700'>
					Cuter
				</button>
			</div>
		</div>
	);
};

export default Home;
