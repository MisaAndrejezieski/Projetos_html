document.getElementById('photoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        // Adicionar a foto ao gallery
        const fileInput = document.getElementById('photoFile');
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = formData.get('photoTitle');

            const gallery = document.getElementById('photoGallery');
            gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});
