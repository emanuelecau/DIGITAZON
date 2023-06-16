import express from 'express';
import bodyParser from 'body-parser';
import {
    getAlbums,
    getAlbumById,
    addAlbum,
    updateAlbum,
    deleteAlbum,
} from './scr/routesAlbum.mjs';
import {
    getPhotoById,
    photoAdder,
    photoDel,
} from './scr/routesPhotos.mjs';

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Rotte degli album
app.get('/albums', getAlbums);
app.get('/albums/:id', getAlbumById);
app.post('/albums', addAlbum);
app.put('/albums/:id', updateAlbum);
app.delete('/albums/:id', deleteAlbum);

// Rotte delle fotografie
app.get('/albums/:id/fotografie/:id', getPhotoById);
app.post('/albums/:id/fotografie', photoAdder);
app.delete('/albums/:id/fotografie/:fotoId', photoDel);

// Rotta di prova
app.get('/', (req, res) => {
    res.send('Hello World! Welcome to Photozone');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

