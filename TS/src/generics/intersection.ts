const obj1 = { lexsa: "linda", ageLexsa: 17 };
const obj2 = { victor: "lindo", ageVictor: 18 };

export const unirObjetos = <T, U>(obj1: T, obj2: U): T & U => {
	return Object.assign({}, obj1, obj2);
};

console.log(unirObjetos(obj1, obj2));
