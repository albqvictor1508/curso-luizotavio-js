
const usuario = 'victor123';
const senha = 'lexsalinda';


const login = usuario === 'victor123' && senha === 'lexsalinda';




//usando condicionais, é possivel criar uma validação de formulário dessa forma 

const darOi = () => 'oi';
//arrow function só com a linha de retorno pode ser escrita dessa maneira 

let executar = false;

// é possivel usar o AND para facilitar 


//dessa forma, enquanto a variável 'executar' tiver um valor falso, a função não será executada
executar = true;

// e se o valor for mudado para um valor verdadeiro, a função será executada

console.log(executar && darOi());

//com o OR é diferente, pois o OR só precisa de um true para ser considerado verdadeiro

console.log(null || undefined || NaN || 'victor ama alexsa' || NaN || true || 0)

//ja que só precisa de um 'true', vai retornar o primeiro true 

let corUsuário = 'vermelho';
const corPadrão = 'roxo';

console.log(corUsuário || corPadrão)

//um exemplo simples de validação de cor onde se a cor não for especificada, será usada a cor padrão, mas se for especificada, ela que será usada 

corUsuário = 'vermelho'; // Usando 'corUsuario' consistentemente

if (!corUsuário) { // Verifica se corUsuario é null, undefined, 0, false, '', etc.
    corUsuário = corPadrao;
}

console.log(corUsuario);

//Uma forma mais extensa de fazer o mesmo exemplo 





