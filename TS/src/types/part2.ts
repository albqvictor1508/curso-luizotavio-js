//TYPE TUPLE

const tuple: [number, string, boolean] = [25, "lexsa", true];
tuple[0] = 8;
tuple[1] = "lexa";
tuple[2] = false;

// UM ARRAY COM O TANTO DE ESPAÇO DEFINIDO E OS TIPOS DEFINIDOS, PODE MUDAR O VALOR A VONTADE, CONTANTO QUE ESTEJA DENTRO DO TIPO ESPECIFICADO (tem como usar pop e push na tupla mas n é muito legal pq ta driblando a tipagem do TS) (tambem pode usar readonly pra ngm mudar)

//TYPE UNDEFINED

function completeName(
	firstName: string,
	lastName?: string,
): { firstName: string; lastName?: string } {
	return {
		firstName,
		lastName,
	};
}
