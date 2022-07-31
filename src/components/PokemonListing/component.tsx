import { Pokemon } from 'pokenode-ts';
import React from 'react';
import Image from 'next/image';

import CuterButton from '../CuterButton';

interface PokemonListingProps {
	pokemon: Pokemon;
}

const PokemonListing: React.FC<PokemonListingProps> = ({ pokemon }) => {
	const { name, sprites } = pokemon;
	const { front_default } = sprites;

	return (
		<div className='pokemon-card flex flex-col items-center'>
			<Image
				src={front_default ? front_default : '/images/question_mark.png'}
				alt={name}
				height={200}
				width={200}
			/>
			<div className='p-2'></div>
			<p className='text-base font-bold capitalize'>{name}</p>
			<div className='p-2'></div>
			<CuterButton />
		</div>
	);
};

export default PokemonListing;
