import { log } from "node:console";

type Person = {
	name: string;
	surname: string;
	age: number;
};

type Art = {
	modality?: "music" | "writter";
	vulgo?: string;
};

const createPerson = ({ name, surname, age }: Person) => {
	const person = { name, surname, age };

	if (name === "lexsa linda boua") log("BIXA BOA DEMAAAAAAAAAAAAIS");

	log();
	log(person);
	return person;
};

function createArtist({
	name,
	surname,
	age,
	modality = "writter",
	vulgo,
}: Person & Art) {
	return {
		name,
		surname,
		age,
		modality,
		vulgo,
	};
}

const artist = createArtist({
	name: "vito",
	surname: "arruda de lexa",
	age: 18,
	modality: "music",
	vulgo: "pitoca de foice",
});

log(artist);
