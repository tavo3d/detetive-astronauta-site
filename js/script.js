// efeito de transicao entre as paginas
document.querySelectorAll('a').forEach(link => {
    // checar se nao é o botao de submit do form
    if (link.getAttribute('type') === 'submit') {
        return;
    }
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');

        // Adiciona a classe fade-out
        document.body.classList.add('fade-out');

        setTimeout(() => {
            window.location.href = href;
        }, 300);  // 1s é a duração da animação
    });
});

// formulário de contato
var form = document.getElementById('contact-form');
form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(e) {
    e.preventDefault(); // Isso evita que a página recarregue
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var data = {
        name: name,
        email: email,
        message: message
    };

    fetch('https://formspree.io/f/mbjvyzaj', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('E-mail enviado com sucesso!');
            // Limpa os campos
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        } else {
            alert('Erro ao enviar e-mail. Por favor, tente novamente mais tarde.');
        }
    })
    .catch(error => {
        console.error('Erro ao enviar o formulário', error);
        alert('Erro ao enviar e-mail. Por favor, tente novamente mais tarde.');
    });
}

