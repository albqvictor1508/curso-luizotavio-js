try {
//É executado até ter um erro
    console.log('Bom dia!');
    console.log('Estou aprendendo a manipular o try catch e finally');
    console.log('Aprendendo a usar try catch e finally aninhado')
    
    try {
    // Se tiver um erro no try de cima, esse try não é executado.
        console.log(b); //ERRO!
        console.log('Nada vai ser executado após o erro');
        
    } catch (err) {
    // Se tiver algum erro no try de cima, o outro catch que é executado
        console.log('Deu erro no catch aninhado')
    } finally {
    //Se tiver um finally aqui também é executado
    }
} catch (erro) {
//É executado quando há erro
console.log('CATCH: Sou executado quando há erros, para tratá-los ou para avisar')
} finally {
// Sempre é executado, independente de ter um erro ou não
    console.log('FINALLY: Sempre sou executado!')
}

// Essa sequencia é obrigatória (try -> finally ou try -> catch-> finally), fora dessa sequência o JS não aceita

// Dentro dessa estrutura, pode haver mais dessa estrutura aninhada

