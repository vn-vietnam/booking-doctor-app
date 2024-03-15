const { default: axios } = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
	baseURL: "http://localhost:1337/api",
	headers: {
		Authorization: `Bearer ${API_KEY}`,
	},
});

const getCategories = () => axiosClient.get("/categories?populate=*");
const getDetailsDoctor = (id) =>
	axiosClient.get("/doctors/" + id + "?populate=*");
const getDoctors = () => axiosClient.get("/doctors?populate=*");
const getDoctorsByCategory = (category) =>
	axiosClient.get(
		"/doctors?filters[categories][Name][$in]=" + category + "&populate=*"
	);
const getBookingByEmail = (email) =>
	axiosClient.get("/appointments?filters[Email][$eq]=" + email + "&populate=*");

const postBooking = (data) => axiosClient.post("/appointments", data);
const deleteBooking = (id) => axiosClient.delete("/appointments/" + id);


export default {
	getCategories,
	getDoctors,
	getDoctorsByCategory,
	getDetailsDoctor,
	postBooking,
	getBookingByEmail,
	deleteBooking,
};
