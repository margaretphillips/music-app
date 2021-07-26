const routes = require('express').Router();
const axios = require('axios');

const artistsList = require('./data/artists.json')
const albumsList = require('./data/albums.json')
const tracksList = require('./data/tracks.json');

routes.get('/', (req, res) => {
    res.status(200).json({ 'message': 'connected' });
});
routes.get('/artists', (req, res) => {
    res.status(200).json(artistsList);
});
routes.get('/albums', (req, res) => {
    res.status(200).json(albumsList);
});
routes.get('/tracks', (req, res) => {
    res.status(200).json(tracksList);
});

async function getToken() {
    try {
        const qs = require('querystring');
        const data = { 'grant_type': 'client_credentials' };
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            auth: {
                username: 'a5e7d4e614304718835ff3784144c071',
                password: '6f13e28b340f44b586d58ad5d696880a'
            },
            data: qs.stringify(data),
            url: 'https://accounts.spotify.com/api/token',
        }
        const response = await axios.request(options);
        return response.data
    } catch (error) {
        console.error(error);
    }
}


async function getData() {
    try {
        const token = await getToken()
        const config = {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token.access_token}`, 'content-type': 'application/x-www-form-urlencoded' }
        }
        const response = await axios.request('https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V', config)
        console.log(response.data)

    } catch (error) {
        console.error(error);
    }
}

console.log(getData())

module.exports = routes;