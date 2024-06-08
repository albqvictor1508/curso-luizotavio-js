function escopo() {
    const data = new Date();
    const hora = data.getHours();
    const dia = data.getDate();
    const diaSemana = data.getDay();
    let diaSemanaText = ['Domingo!', 'Segunda!', 'Terça!', 'Quarta!', 'Quinta!', 'Sexta!', 'Sábado!']
    const ano = data.getFullYear();
    const relogio = document.querySelector('#relogio');

    function diaSemanaMostrar() {
        switch (diaSemana) {
            case 0:
            return diaSemanaText[0];
            case 1:
            return diaSemanaText[1];
            
            case 2:
            return diaSemanaText[2];
            
            case 3:
            return diaSemanaText[3];
            case 4:
            return diaSemanaText[4];
            case 5:
            return diaSemanaText[5];
            case 6:
               return diaSemanaText[6];
            default:
                alert('ERRO!')
                break

        }
    }
    diaSemanaMostrar();
    console.log(diaSemana, diaSemanaText)
    
}
escopo();

