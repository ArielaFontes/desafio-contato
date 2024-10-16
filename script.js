let p = document.querySelector('p')
let input = document.querySelector('input')

const contacts = [
    { name: 'Ariela', number: '(79) 9 9923-6632' },
    { name: 'Maria', number: '(21) 9 9223-6632' },
    { name: 'João', number: '(69) 9 9923-9932' },
    { name: 'Jucinete', number: '(79) 9 9888-6632' }

]
function search() {
    for ( const contact of contacts ) {
        if (input.value.toLowerCase() === contact.name.toLowerCase()) {
            p.innerHTML = (`Nome: ${contact.name} Telefone: ${contact.number}`);
            break

        } else {
            p.innerHTML = "Contato não encontrado."
        }
    }
}  