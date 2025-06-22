
document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        perPage: 3,
        rewind: true,
        gap: '1rem',
        autoplay: true,             // Activa el desplazamiento automático
        interval: 2500,             // Tiempo entre desplazamientos (milisegundos)
        pauseOnHover: true,         // Se pausa si el usuario pasa el mouse
        direction: 'ltr',           // Dirección: 'ltr' (izquierda a derecha)
        type: 'loop',               // Para que el carrusel sea infinito
        breakpoints: {
            768: {
                perPage: 2,
            },
            480: {
                perPage: 1,
            },
        },
    });

    splide.mount();
});
