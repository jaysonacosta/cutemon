const MIN_POKE_ID = 1;
const MAX_POKE_ID = 905;

const generateRandomIds = (): [number, number] => {
	const min = Math.ceil(MIN_POKE_ID);
	const max = Math.floor(MAX_POKE_ID);
	const firstId = Math.floor(Math.random() * (max - min + 1) + min);
	const secondId = Math.floor(Math.random() * (max - min + 1) + min);

	if (firstId === secondId) {
		return generateRandomIds();
	}

	return [firstId, secondId];
};

export default generateRandomIds;
