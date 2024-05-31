let arr = ['alexsa', 'victor', 'billy', 'lily', 'luna', 'black', 'joao vito'];

arr[arr.length] = 'vito' //ou array.push('vito')

arr[arr.length] = 'teste', 'b', 'c' //não funciona (só adicionar o primeiro elemento)

arr.push('a', 'b', 'c') //funciona (adiciona todos)
console.log(arr)

//OS DOIS ADICIONAM NO FIM

arr[7] = 'alterado'