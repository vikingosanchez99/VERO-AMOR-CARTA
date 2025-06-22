window.addEventListener('load', () => {
    console.log('Página cargada');

    function mostrarSorpresa() {
        document.getElementById('pantalla-inicial').classList.add('oculto');
        document.getElementById('pantalla-sorpresa').classList.remove('oculto');

        // Reproducir música tras interacción del usuario
        const audio = document.getElementById('musica');
        const playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    console.log("🎵 Música iniciada correctamente");
                })
                .catch((error) => {
                    console.warn("⚠️ No se pudo reproducir automáticamente:", error);
                });
        }
    }

    // Asignar evento al corazón y al botón
    document.querySelector('.corazon').addEventListener('click', mostrarSorpresa);
    document.querySelector('#pantalla-inicial button').addEventListener('click', mostrarSorpresa);
});
