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

