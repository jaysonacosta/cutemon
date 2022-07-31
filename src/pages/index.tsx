import type { NextPage } from 'next';
import { Pokemon } from 'pokenode-ts';
import { useEffect, useState } from 'react';
import generateRandomIds from '../utils/generateRandomId';

import PokemonListing from '../components/PokemonListing';

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
					<PokemonListing pokemon={firstPokemon} />
					<p className='text-base font-bold'>vs</p>
					<PokemonListing pokemon={secondPokemon} />
				</div>
			</div>
		);
	}

	return <>Loading...</>;
};

export default Home;
