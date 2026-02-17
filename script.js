// JS listo para crecer 🚀
// Aquí luego puedes:
// - Abrir un modal
// - Reproducir audio
// - Hacer hover animado
// - Redirigir a Spotify / YouTube

document.querySelectorAll('.song').forEach((song, index) => {
    song.addEventListener('click', () => {
        console.log(`Click en canción ${index + 1}`);
    });
});
