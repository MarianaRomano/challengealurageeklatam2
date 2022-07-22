
function inputValidation() {
    if (document.form.nome.value == '') {
        alert('Campo nombre obligatorio')
        document.form.nome.focus()
    } else if (document.form.mensagem.value == '') {
        alert('Mensaje Obligatorio')
        document.form.mensagem.focus()
    }
    if (document.form.nome.value == '' || document.form.mensagem.value == '') {
        window.event.preventDefault()
    }
    if (document.form.nome.value > 0 && document.form.mensagem.value > 0) {
        window.event.stopPropagation()
    }
}

document.querySelector('form').addEventListener('submit', inputValidation)
