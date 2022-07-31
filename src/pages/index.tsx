import type { NextPage } from 'next';
import { Pokemon } from 'pokenode-ts';
import { useEffect, useState } from 'react';
import generateRandomIds from '../utils/generateRandomId';

const endpoint = 'api/getPokemon?';

const Home: NextPage = () => {
	const [isLoading, setLoading] = useState(false);
	const [pokemon, setPokemon] = useState<Pokemon[]>();
	const [firstId, secondId] = generateRandomIds();

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const firstPokemon = await fetch(
				endpoint + new URLSearchParams({ id: firstId.toString() })
			).then((res) => res.json());

			const secondPokemon = await fetch(
				endpoint + new URLSearchParams({ id: secondId.toString() })
			).then((res) => res.json());

			setPokemon([firstPokemon, secondPokemon]);
			setLoading(false);
		};

		fetchData();
	}, []);

	if (!isLoading && pokemon) {
		const [firstPokemon, secondPokemon] = pokemon;

		return (
			<div className='container mx-auto px-16 flex flex-col justify-center items-center min-h-screen'>
				<h1 className='text-white text-4xl font-bold'>Cutemon</h1>
				<div className='p-4'></div>
				<div className='card-container flex p-8 w-full justify-evenly items-center border-2 border-white rounded'>
					<div className='pokemon-card flex flex-col items-center'>
						<img
							className='image w-52 h-52'
							src={firstPokemon.sprites.front_default}
						/>
						<div className='p-2'></div>
						<p className='text-base font-bold capitalize'>
							{firstPokemon.name}
						</p>
						<div className='p-2'></div>
						<button className='bg-zinc-900 p-2 px-6 rounded hover:bg-zinc-800 active:bg-zinc-700'>
							Cuter
						</button>
					</div>
					<p className='text-base font-bold'>vs</p>
					<div className='pokemon-card flex flex-col items-center'>
						<img
							className='image w-52 h-52'
							src={secondPokemon.sprites.front_default}
						/>
						<div className='p-2'></div>
						<p className='text-base font-bold capitalize'>
							{secondPokemon.name}
						</p>
						<div className='p-2'></div>
						<button className='bg-zinc-900 p-2 px-6 rounded hover:bg-zinc-800 active:bg-zinc-700'>
							Cuter
						</button>
					</div>
				</div>
			</div>
		);
	}

	return <>Loading...</>;
};

export default Home;
