import fs from 'fs/promises';
import moment from 'moment';

const DB_PATH = './db/Albums.json';

export const getAlbums = async (req, res) => {
    try {
        const data = await fs.readFile(DB_PATH, 'utf-8');
        const albums = JSON.parse(data);
        res.status(200).json(albums);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getAlbumById = async (req, res) => {
    const albumId = req.params.id;

    try {
        const data = await fs.readFile(DB_PATH, 'utf-8');
        const albums = JSON.parse(data);
        const album = albums.find(album => album.id == albumId);

        if (album) {
            res.status(200).json(album);
        } else {
            res.status(404).json({ message: 'Album not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const addAlbum = async (req, res) => {
    try {
        const data = await fs.readFile(DB_PATH, 'utf-8');
        const albums = JSON.parse(data);

        const { nome, hashtags } = req.body;

        const newAlbum = {
            id: generateAlbumId(albums),
            fotografie: [],
            dataCreazione: moment().toISOString(),
            dataModifica: moment().toISOString(),
            nome: nome || '',
            hashtags: '#viaggi' || hashtags,
        };

        albums.push(newAlbum);

        await fs.writeFile(DB_PATH, JSON.stringify(albums, null, '  '));
        res.status(201).json(newAlbum);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const updateAlbum = async (req, res) => {
    const albumId = req.params.id;
    const { nome, hashtags } = req.body;

    try {
        const data = await fs.readFile(DB_PATH, 'utf-8');
        const albums = JSON.parse(data);
        const albumIndex = albums.findIndex(album => album.id === albumId);

        if (albumIndex !== -1) {
            const updatedAlbum = {
                ...albums[albumIndex],
                nome,
                hashtags,
                dataModifica: moment().toISOString(),
            };
            albums[albumIndex] = updatedAlbum;
            await fs.writeFile(DB_PATH, JSON.stringify(albums, null, '  '));
            res.status(200).json(updatedAlbum);
        } else {
            res.status(404).json({ message: 'Album not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const deleteAlbum = async (req, res) => {
    const albumId = req.params.id;

    try {
        const data = await fs.promises.readFile(DB_PATH, 'utf-8');
        let albums = JSON.parse(data);
        const albumIndex = albums.findIndex(album => album.id === parseInt(albumId));


        if (albumIndex !== -1) {
            albums.splice(albumIndex, 1);
            await fs.promises.writeFile(DB_PATH, JSON.stringify(albums, null, 2));
            res.status(200).json({ message: 'Album deleted successfully' });
        } else {
            res.status(404).json({ message: 'Album not found' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Funzione per generare un nuovo ID per l'album
export function generateAlbumId(albums) {
    if (albums.length > 0) {
        const lastAlbumId = albums[albums.length - 1].id;
        const nextId = lastAlbumId + 1;
        return nextId;
    } else {
        return 1;
    }
}