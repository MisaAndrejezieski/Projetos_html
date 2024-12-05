const express = require('express');
const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'baixar_site')));

app.post('/save-url', (req, res) => {
    const url = req.body.url;
    fs.writeFileSync(path.join(__dirname, 'baixar_site', 'site_url.txt'), url);
    res.send('URL salvo com sucesso!');
});

app.get('/execute-bat', (req, res) => {
    exec('baixar_site.bat', { cwd: path.join(__dirname, 'baixar_site') }, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro ao executar o script: ${error}`);
            return res.status(500).send('Erro ao executar o script.');
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        res.send('Script executado com sucesso!');
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
