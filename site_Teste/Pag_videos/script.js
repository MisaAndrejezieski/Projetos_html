document.getElementById('videoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('/upload_video', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        // Adicionar o vídeo ao gallery
        const fileInput = document.getElementById('videoFile');
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            const video = document.createElement('video');
            video.src = e.target.result;
            video.controls = true;
            video.alt = formData.get('videoTitle');

            const gallery = document.getElementById('videoGallery');
            gallery.appendChild(video);
        };
        reader.readAsDataURL(file);
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});
