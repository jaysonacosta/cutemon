import type { NextPage } from 'next';
import { Pokemon } from 'pokenode-ts';
import { useEffect, useState } from 'react';
import generateRandomIds from '../utils/generateRandomId';

import PokemonListing from '../components/PokemonListing';

import axios from 'axios';

const endpoint = 'api/getPokemon?';

const Home: NextPage = () => {
	const [isLoading, setLoading] = useState(false);
	const [ids, updateIds] = useState(generateRandomIds);
	const [pokemon, setPokemon] = useState<Pokemon[]>();

	const voteForCutest = () => {
		updateIds(generateRandomIds);
	};

	useEffect(() => {
		const getPokemon = async () => {
			const [firstId, secondId] = ids;
			const firstPokemon = await axios
				.get(endpoint + new URLSearchParams({ id: firstId.toString() }))
				.then((res) => res.data);

			const secondPokemon = await axios
				.get(endpoint + new URLSearchParams({ id: secondId.toString() }))
				.then((res) => res.data);

			return [firstPokemon, secondPokemon];
		};

		const fetchData = async () => {
			setLoading(true);
			setPokemon(await getPokemon());
			setLoading(false);
		};

		fetchData();
	}, [ids]);

	if (!isLoading && pokemon) {
		const [firstPokemon, secondPokemon] = pokemon;

		return (
			<div className='container mx-auto px-16 flex flex-col justify-center items-center min-h-screen'>
				<h1 className='text-white text-4xl font-bold'>Cutemon</h1>
				<div className='p-4'></div>
				<div className='card-container flex p-8 w-full justify-evenly items-center border-2 border-white rounded'>
					<PokemonListing
						pokemon={firstPokemon}
						opposingPokemon={secondPokemon}
						voteForCutest={voteForCutest}
					/>
					<p className='text-base font-bold'>vs</p>
					<PokemonListing
						pokemon={secondPokemon}
						opposingPokemon={firstPokemon}
						voteForCutest={voteForCutest}
					/>
				</div>
				<h4 className='text-white text-xl font-bold fixed bottom-5'>
					<a href='https://github.com/jaysonacosta/cutemon'>GitHub</a>
				</h4>
			</div>
		);
	}

	return (
		<div className='container mx-auto px-16 flex flex-col justify-center items-center min-h-screen'>
			<h1 className='text-white text-4xl font-bold'>Cutemon</h1>
			<div className='p-4'></div>
			<div className='card-container flex p-8 w-full justify-evenly items-center border-2 border-white rounded'>
				<p className='text-base font-bold'>vs</p>
			</div>
		</div>
	);
};

export default Home;
