function escopo() {

    function formatarRelogio(valor) {
        return valor.toString().padStart(2,'0');
        
    }
    const data = new Date();
    const segundos = formatarRelogio(data.getSeconds());
    const minuto = formatarRelogio(data.getMinutes());
    const hora = formatarRelogio(data.getHours());
    const dia = formatarRelogio(data.getDate());
    const diaSemana = data.getDay();
    const diaSemanaArr = ['Domingo!', 'Segunda!', 'Terça!', 'Quarta!', 'Quinta!', 'Sexta!', 'Sábado!'];
    let diaSemanaText
    const mês = formatarRelogio(data.getMonth() + 1);
    const ano = data.getFullYear();
    const relogio = document.querySelector('#relogio');

    function diaSemanaMostrar() { 
        switch (diaSemana) {
            case 0:
            return diaSemanaText = diaSemanaArr[0];
            case 1:
            return diaSemanaText = diaSemanaArr[1];
            
            case 2:
            return diaSemanaText = diaSemanaArr[2];
            
            case 3:
            return diaSemanaText = diaSemanaArr[3];
            case 4:
            return diaSemanaText = diaSemanaArr[4];
            case 5:
            return diaSemanaText = diaSemanaArr[5];
            case 6:
            return diaSemanaText = diaSemanaArr[6];
            default:
            alert('ERRO!')
            break
                    
            }
        }
        diaSemanaMostrar();
        // Uma função que poderia muito bem ser resumida, pois o getDay() retorna um número de 0 a 6 (começando de domingo e terminando no sábado)

        //Ou seja, se essa ordem for posta em um array, em vez de multiplas condições, só seria necessário utilizar o valor retornado do getDay() como índice para um array q contem os dias da semana em forma de string

        /*
        Por exemplo:

            function diaSemanaMostrar(diaSemana) {
                const dias = ['domingo','segunda', 'terça', 'o resto']
                return dias[diaSemana]
            }

            assim o valor que é retornado dessa variável será utilizado como índice no array, simplificando muito o código.

            o mesmo pode ser feito para qualquer caso de uma variável que retorna um número que possa ser manipulado dentro de uma condicional, sendo muito eficaz para ganhar tempo.
        */ 
            
        function CriarRelogio(relogio) {
            return relogio.innerHTML = `${dia}/${mês}/${ano}, ${diaSemanaText}, ${hora}:${minuto}:${segundos}`
        }
        console.log(diaSemana, diaSemanaText);
        
        
            CriarRelogio(relogio);
            formatarRelogio(dia, mês);
        
            setInterval(escopo, 1000);
            
        }

    
escopo();

//Aprendido a formatação usando toString() e padStart();

//Aprendido o conceito de padStart();

//aprendido sobre setInterval();

//prática sobre funções compostas;

//praticando o escopo de função;

//aprendendo a colocar um parâmetro de função no valor de uma variável;

//REVISAR ESSE CÓDIGO!!!
