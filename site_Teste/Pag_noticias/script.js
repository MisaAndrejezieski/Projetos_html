document.getElementById('newsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('newsTitle').value;
    const content = document.getElementById('newsContent').value;

    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');
    newsItem.innerHTML = `<h2>${title}</h2><p>${content}</p>`;

    const gallery = document.getElementById('newsGallery');
    gallery.appendChild(newsItem);

    // Limpar o formulário
    document.getElementById('newsForm').reset();
});
