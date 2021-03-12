import { useState, useEffect } from 'react';


function queryString(params: any) {
	return Object.keys(params)
		.map((key) => `${key}=${params[key]}`)
		.join("&");
}

function createUrl(url: string, queryOptions: any) {
	return queryOptions ? url + "?" + queryString(queryOptions) : url;
}

const useFetch = (url: string, options: any = { body: {}, query: {}, method: 'GET' }) => {
	const [data, setData] = useState<{
		response: null | any,
		error: null | any,
		loading: boolean
	}>({
		response: null,
		error: false,
		loading: false,
	});

	useEffect(() => {
		if (!options.body.name && !options.body.email) {
			return;
		}
		setData({ ...data, error: false, loading: true });
		let opts: any = {
			method: options.method,
			headers: {
				"Content-Type": "application/json",
			}
		};
		if (options.method !== "GET") {
			opts.body = JSON.stringify(options.body);
		}
		// setTimeout(() =>
		fetch(createUrl(url, options.query), opts)
			.then(async (response) => {
				const data = await response.json();
				if (response.status === 400) {
					setData({
						response: { status: data.errorMessage },
						error: true,
						loading: false,
					});
				} else {
					setData({
						response: data,
						error: !response.ok,
						loading: false,
					});
				}
			})
			.catch((error) => {
				setData({
					response: { status: error || "network_failure" },
					error: true,
					loading: false,
				});
			})
		// ,10000);
	}, [JSON.stringify(options, null)]);

	return data;
};

export default useFetch;