let arr = ['alexsa', 'victor', 'billy', 'lily', 'luna', 'black', 'joao vito'];

arr[arr.length] = 'vito' //ou array.push('vito')

arr[arr.length] = 'teste', 'b', 'c' //não funciona (só adicionar o primeiro elemento)

arr.push('a', 'b', 'c') //funciona (adiciona todos)


//OS DOIS ADICIONAM NO FIM

arr[8] = 'alterado' //altera


arr.unshift('eu amo alexsa') //adiciona no começo

//arr.pop() //remove o ultimo elemento

//arr.shift() //remove o primeiro elemento

arr.slice(0, 3) //cortará o array, pegando somente 3 elementos 

//o (0, 3) funcionará como uma subtração, se colocar do (1, 5) por exemplo, só será exibido 4 elementos, (2, 5) = 3 elementos, e assim por diante


console.log(arr)



