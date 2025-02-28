// const pensando = {
// 	typescript: 0,
// 	javascript: 0,
// 	python: 0,
// };

// function votar(vote: number) {
// 	if (vote === 1) {
// 		pensando["typescript"]++;
// 	}
// 	if (vote === 2) {
// 		pensando["javascript"]++;
// 	}
// 	if (vote === 3) {
// 		pensando["python"]++;
// 	}
// }

// votar(1);
// votar(1);
// votar(1);
// votar(2);
// votar(2);

// console.log(pensando);

export class Votacao {
	private languages = { typescript: 0, javascript: 0, python: 0 };

	vote(numberOfVote: number) {
		if (numberOfVote === 1) {
			this.languages.typescript++;
		}
		if (numberOfVote === 2) {
			this.languages.javascript++;
		}
		if (numberOfVote === 3) {
			this.languages.python++;
		}
		return this.languages;
	}
}
const votes = new Votacao();

console.log(votes.vote(1));
console.log(votes.vote(1));
console.log(votes.vote(2));
