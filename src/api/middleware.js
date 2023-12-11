import router from "@/router";
import axios from "axios";

axios.interceptors.response.use(
	response => response,
	error => {
		const { data, status } = error.response;
        console.log({ data, status });
		switch (status) {
			case 401:
				router.push({ name: 'unauthorized' });
                break;
			default:
				router.push({ name: 'error' });
		}
	});

export default axios;