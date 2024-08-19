const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurar o armazenamento com multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Pag_fotos/fotos_Post');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'Pag_fotos')));
app.use(express.static(path.join(__dirname, '')));

// Rota para upload de fotos
app.post('/upload', upload.single('photoFile'), (req, res) => {
    res.send('Foto enviada com sucesso!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

