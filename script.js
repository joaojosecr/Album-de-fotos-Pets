
document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.card mb-4 text-white bg-dark mostrarBtn');
    var carousel = document.getElementById('carouselExampleIndicators');
    
    console.log("carregado")
    buttons.forEach(function (button) {
        
        button.addEventListener('click', function () {
            var targetSlideId = 'slide' + this.id; // Construa o ID do slide de destino
            var targetSlide = document.getElementById(targetSlideId);
        
            // Remova a classe 'active' de todos os slides
            var slides = carousel.querySelectorAll('.carousel-item');
            slides.forEach(function (slide) {
                slide.classList.remove('active');
            });
        
            // Adicione a classe 'active' ao slide de destino
            targetSlide.classList.add('active');
        
            // Torna o carrossel visível
            minhaDiv.style.display = 'flex';
            });
    });

    // Adiciona um ouvinte de evento para o botão "Fechar"
    fecharBtn.addEventListener('click', function() {
        minhaDiv.style.display = 'none'; // Oculta a div novamente
    });
    // Adiciona um ouvinte de evento para a tecla "ESC"
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            minhaDiv.style.display = 'none'; // Oculta a div quando "ESC" é pressionado
        }
    });
    
});