//tudo que exportar do namespace vira um atributo de um objeto namespace
namespace helloWorld {
	export class namePerson {
		constructor(private name: string) {}
	}
	export const monki = new namePerson("monki");
}
const monki = new helloWorld.namePerson("monki");
const monki2 = helloWorld.monki;

