import React, { useState } from 'react';

import axios from 'axios';
import { Pokemon } from 'pokenode-ts';

interface CuterButtonProps {
	pokemon: Pokemon[];
	voteForCutest: () => void;
}

const CuterButton: React.FC<CuterButtonProps> = ({
	pokemon,
	voteForCutest,
}) => {
	const [isClicked, setClicked] = useState(false);

	const [mainPokemon, opposingPokemon] = pokemon;

	const onClickHandler = async () => {
		setClicked(true);
		await axios.post('api/postVote', null, {
			params: {
				mainPokemonId: mainPokemon.id,
				opposingPokemonId: opposingPokemon.id,
			},
		});

		voteForCutest();
	};

	return (
		<button
			className='bg-zinc-900 p-2 px-6 rounded hover:bg-zinc-800 active:bg-zinc-700'
			onClick={onClickHandler}
			disabled={isClicked}
		>
			Cuter
		</button>
	);
};

export default CuterButton;
