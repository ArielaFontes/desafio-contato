let p = document.querySelector('p')
let input = document.querySelector('input')

const contacts = [
    { name: 'Ariela', number: '(79) 9 9923-6632' },
    { name: 'Maria', number: '(21) 9 9223-6632' },
    { name: 'João', number: '(69) 9 9923-9932' },
    { name: 'Jucinete', number: '(79) 9 9888-6632' }

]

function search() {
    for (let i = 0; i < contacts.length; i++) {
        if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
            p.innerHTML = (`Nome: ${contacts[i].name} Telefone: ${contacts[i].number}`);
            break

        } else {
            p.innerHTML = "Contato não encontrado."
        }
    }
}  