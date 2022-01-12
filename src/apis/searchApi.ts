import axios from "axios";

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'es',
    access_token: 'pk.eyJ1IjoiY29kZXNsYXRvciIsImEiOiJja3k4eGNsN3MwMHg3Mm9wY3VnbHQzY3MyIn0.Nik9wQYFSgawMsdJEfZ4Kw',
  }
});

export default searchApi;