import type { NextApiRequest, NextApiResponse } from 'next';
import { createVote } from '../../../prisma/vote';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		switch (req.method) {
			case 'POST': {
				const { mainPokemonId, opposingPokemonId } = req.query;
				if (mainPokemonId && opposingPokemonId) {
					const [mainId, opposingId] =
						Array.isArray(mainPokemonId) || Array.isArray(opposingPokemonId)
							? [mainPokemonId[0], opposingPokemonId[0]]
							: [mainPokemonId, opposingPokemonId];

					const vote = await createVote(parseInt(mainId), parseInt(opposingId));
					return res.json(vote);
				}
			}
		}
	} catch (error) {
		return res.status(500).json({ message: 'Something went wrong.' });
	}
};

export default handler;
