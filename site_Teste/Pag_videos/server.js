const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurar o armazenamento com multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Pag_videos/videos_Post');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'Pag_videos')));
app.use(express.static(path.join(__dirname, '')));

// Rota para upload de vídeos
app.post('/upload_video', upload.single('videoFile'), (req, res) => {
    res.send('Vídeo enviado com sucesso!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
