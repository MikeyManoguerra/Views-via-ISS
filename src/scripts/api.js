
// TODO config file
// TODO better icon

const ISS_URL =
  'https://api.wheretheiss.at/v1/satellites/25544';
// 'http://api.open-notify.org/iss-now.json?callback=?';
const NASA_URL =
  'https://api.nasa.gov/planetary/earth/imagery?';
const NASA_API_KEY =
  'api_key=6xjJbi1FBz5ogidAuBgD1CNzpVDhMlopTUXgFTLY';
const MAP_URL =
  'https://www.mapquestapi.com/staticmap/v5/map?key=Zv1VRVyg4mhlWC8AmfdyyfhLhZS5EGcO&locations=';

const getNasaImage = (coordinates, date = '2013-12-24', dim = .1) => {
  return fetch(`${NASA_URL}${coordinates}&date=${date}&dim=${dim}&${NASA_API_KEY}`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res
    });
};

const getMapData = (coordinates, zoom = 5) => {
  return fetch(
    `${MAP_URL}${coordinates}|https://res.cloudinary.com/dgzjr8afn/image/upload/v1551466429/ISS-SMALL.png&zoom=${zoom}&size=800,800`)
    // &defaultMarker=flag-009900-ISS-sm
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.url;
    });
};

const getISSdata = () => {
  const data = $.getJSON(`${ISS_URL}`);
  return data;
};

export const api = {
  getISSdata,
  getNasaImage,
  getMapData
};
