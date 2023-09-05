document.querySelectorAll('a').forEach(link => {
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

