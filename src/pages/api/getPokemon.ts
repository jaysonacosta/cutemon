// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { Pokemon, PokemonClient } from 'pokenode-ts';

const handler = async (req: NextApiRequest, res: NextApiResponse<Pokemon>) => {
	const getPokemonById = async (id: number) => {
		const pokeApi = new PokemonClient();

		const pokemon: Pokemon = await pokeApi
			.getPokemonById(id)
			.then((data) => data);

		if (!pokemon) {
			throw new Error('something went wrong');
		}

		return pokemon;
	};

	try {
		const queryId = req.query.id;
		if (queryId) {
			const id = Array.isArray(queryId)
				? parseInt(queryId[0])
				: parseInt(queryId);

			return res.json(await getPokemonById(id));
		}

		throw new Error('id is undefined');
	} catch (err) {
		return res.status(500);
	}
};

export default handler;
