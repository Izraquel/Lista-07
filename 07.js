function obtemdado_agenda() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let cpf = document.getElementById("cpf").value;
    let date = document.getElementById("date").value;
    let tel = document.getElementById("tel").value;
    let cel = document.getElementById("cel").value;
    let especialidade = document.getElementById("especialidade").value;
    let local = document.getElementById("local").value;
    let medico = document.getElementById("medico").value;
    let dataAgendamento = document.getElementById("dataAgendamento").value;
    let hora = document.getElementById("hora").value;
  
  
    const dados = ` 
        Nome : ${name} 
        Email : ${email}
        CPF : ${cpf}
        Data de Nascimento : ${date}
        Telefone : ${tel}
        Celular : ${cel}
        Especialidade : ${especialidade}
        Local : ${local}
        Médico : ${medico}
        Data do agendamento : ${dataAgendamento}
        Horário do agendamento : ${hora}
        `
  
    alert(`Dados digitados : ${dados}.`);
  
    return false;
  }