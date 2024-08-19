document.getElementById('photoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('photoTitle').value;
    const file = document.getElementById('photoFile').files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = title;

            const gallery = document.getElementById('photoGallery');
            gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});
