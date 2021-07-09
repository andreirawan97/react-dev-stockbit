// I generate this API key myself because of "Maximum limit reached"
const API_KEY = "60eedcc3"; // This is dangerous. Need to put it in .env but oh well.

const BASE_API_URL = "http://www.omdbapi.com/?apikey=";

export const API_URL = `${BASE_API_URL}${API_KEY}`;
