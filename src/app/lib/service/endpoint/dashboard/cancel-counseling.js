import instance from "../../instance/instance";

export default async function CancelCounseling({ counselingId, message }) {
    try {
        const response = await instance.post(`/counseling/status/cancel/${counselingId}`, {
            message: message,
        });

        return response.data;
    } catch (error) {
        console.error('API Error:', error.response.data);
        return error.response.data;
    }
}