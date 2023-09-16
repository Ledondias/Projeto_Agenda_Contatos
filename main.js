const form = document.getElementById('phonebook-form')
const contactNames = []
const contactNumbers = []

let rows = ''

form.addEventListener('submit', function(event){
    event.preventDefault()

    addContact()
    tableUpdate()
})

//Funções do evento no formulário.
function addContact(){
    const inputContactName = document.getElementById('contact-name')
    const inputContactTel = document.getElementById('contact-tel')
    let numberLengthValidation = true

    //Caso dois nomes iguais sejam registrados, o registro será cancelado e o usuário notificado.
    if(contactNames.includes(inputContactName.value)){
        alert(`O nome ${inputContactName.value} já foi utilizado para registrar um contato!`)

    //Caso o mesmo número de telefone seja inserido, o registro também será cancelado e o usuário notificado.
    } else if(contactNumbers.includes(inputContactTel.value)) {
        alert(`O telefone ${inputContactTel.value} já foi registrado!`)
    } else{
        contactNames.push(inputContactName.value)
        contactNumbers.push(inputContactTel.value)

        let row = `<tr>`
        row += `<td>${inputContactName.value}</td>`
        row += `<td>${inputContactTel.value}</td>`

        //Validação para verificar se o número digitado tem 11 algarismos, de acordo com o formato (xx) x xxxx-xxxx (sem os caracteres especiais).
        numberLengthValidation = inputContactTel.value.length == 11

        if(!numberLengthValidation){
            alert('Digite um número com 11 algarismos sem caracteres especiais!')
        } else {
            row += `<tr>`
            rows += row
        }
    }
    inputContactName.value = ''
    inputContactTel.value = ''
}

function tableUpdate(){
    const tableBody = document.querySelector('tbody')
    tableBody.innerHTML = rows
}
