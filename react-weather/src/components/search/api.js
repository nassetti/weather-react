export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7949c009a5msh818587cddd35710p1f8e70jsn631bb0220a06',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions';

fetch('/cities', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));