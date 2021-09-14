import { BASE_URL } from '../constant.js';

const mapRoverPhoto = (photos) => {
    return photos.map(photo => {
        return {
            src: photo.img_src,
            timestamp: photo.earth_date,
            camera: photo.camera.full_name,
        };
    });
}

export const getRoverPhotos = (rover, limit = 10) => {
    return axios
        .get(`${BASE_URL}/rovers/${rover}/latest_photos`)
        .then(response => {
            const { data: { latest_photos } } = response;
            const photos = latest_photos.slice(0, limit);
            return mapRoverPhoto(photos);
        })
        .catch(e => console.error(e));
}