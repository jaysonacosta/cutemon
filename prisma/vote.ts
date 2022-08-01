import prisma from './prisma';

export const createVote = async (
	mainPokemonId: number,
	opposingPokemonId: number
) => {
	const vote = await prisma.vote
		.create({
			data: {
				votedForId: mainPokemonId,
				votedAgainstId: opposingPokemonId,
			},
		})
		.then(() => {
			prisma.$disconnect();
		});
	return vote;
};
