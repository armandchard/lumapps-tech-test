import axios from "axios";

const instance = axios.create({
	baseURL: "https://gateway.marvel.com/v1/public/",
	timeout: 1000,
});

const baseQueryParams = {
	apikey: process.env.REACT_APP_MARVEL_API_KEY,
};

const get = async (url, query) => {
	const response = await instance.get(url, {
		params: {
			...query,
			...baseQueryParams,
		},
	});
	return response.data.data;
};

export { instance as api, get };
