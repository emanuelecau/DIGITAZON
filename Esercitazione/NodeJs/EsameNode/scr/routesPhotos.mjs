
import moment from 'moment';
import fs from 'fs/promises';

const DB_PATH_PHOTOS = './db/fotografie.json';

export const getPhotoById = async (req, res) => {
    const albumId = req.params.id;
    const fotoId = req.params.fotoId;

    try {
        const data = await fs.promises.readFile(DB_PATH_PHOTOS, 'utf-8');
        const photos = JSON.parse(data);
        const photo = photos.find(photo => photo.albumId === albumId && photo.id === fotoId);

        if (photo) {
            res.send(photo);
        } else {
            res.status(404).send({ message: 'Photo not found' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Internal server error' });
    }
};

export const photoAdder = async (req, res) => {
    const albumId = req.params.id;

    try {
        const data = await fs.promises.readFile(DB_PATH_PHOTOS, 'utf-8');
        const photos = JSON.parse(data);
        const { nome, hashtags } = req.body;

        if (!nome || !albumId || !hashtags) {
            res.status(400).send({ message: 'Missing required fields' });
            return;
        }

        const newPhoto = {
            id: generatePhotoId(photos),
            albumId,
            nome,
            dataCreazione: moment().toISOString(),
            dataModifica: moment().toISOString(),
            hashtags,
        };

        photos.push(newPhoto);

        await fs.promises.writeFile(DB_PATH_PHOTOS, JSON.stringify(photos, null, '  '));
        res.status(200).send(newPhoto);
    } catch (error) {
        res.status(500).send({ message: 'Internal server error' });
    }
};

export const photoDel = async (req, res) => {
    const albumId = req.params.id;
    const fotoId = req.params.fotoId;

    try {
        const data = await fs.promises.readFile(DB_PATH_PHOTOS, 'utf-8');
        let photos = JSON.parse(data);
        const photoIndex = photos.findIndex(photo => photo.albumId === albumId && photo.id === fotoId);

        if (photoIndex !== -1) {
            photos.splice(photoIndex, 1);
            await fs.promises.writeFile(DB_PATH_PHOTOS, JSON.stringify(photos, null, '  '));
            res.status(200).send({ message: 'Photo deleted successfully' });
        } else {
            res.status(404).send({ message: 'Photo not found' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Internal server error' });
    }
};

// Funzione per generare un nuovo ID per la foto
export function generatePhotoId(photos) {
    if (photos.length > 0) {
        const lastPhotoId = photos[photos.length - 1].id;
        const nextId = lastPhotoId + 1;
        return nextId;
    } else {
        return 1;
    }
}