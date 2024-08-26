import instance from "../../instance/instance";
import getUser from "../user/get-user";

export default async function createCounseling({ date, time, service, category }) {
    try {

        const response = await instance.post('/counseling/store', {
            counseling_date: date,
            time,
            service,
            subject: category,
        });

        return response.data;
    } catch (error) {
        console.error('API Error:', error.response.data);
        return error.response.data;
    }
}
