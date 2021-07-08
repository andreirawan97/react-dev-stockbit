const API_KEY = "faf7e5bb"; // This is dangerous. Need to put it in .env but oh well.

const BASE_API_URL = "http://www.omdbapi.com/?apikey=";

export const API_URL = `${BASE_API_URL}${API_KEY}`;
