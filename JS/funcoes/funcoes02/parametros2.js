// no lugar da variável 'arguments', também pode se usar o rest operator.


const vito = (...args) => console.log(args);

vito('vito', 'ama alexsa muito', 'arruda', 123, 321);

//Dessa forma, funciona igual o arguments, porém o arguments vem inbutido nas funções q possuem a palavra 'function' e não precisa ser passado por parâmetro.

const func = ([...arr]) => console.log(arr);

func([10, 20, 35, 32, 44, 80, 90, 100, 200]);

//Com o rest operator, o parâmetro capta todo o array

const func2 = ({...obj}) => console.log(obj);

func2({carro: 'honda civic', idade: 2012, roda: 'aro 30 cromada', tração:'trazera', equipado: 'sim', nomeSujo: 'sim', });

//também funciona com objetos