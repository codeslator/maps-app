import axios from "axios";

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token: 'pk.eyJ1IjoiY29kZXNsYXRvciIsImEiOiJja3k4eGNsN3MwMHg3Mm9wY3VnbHQzY3MyIn0.Nik9wQYFSgawMsdJEfZ4Kw',
  }
});

export default directionsApi;