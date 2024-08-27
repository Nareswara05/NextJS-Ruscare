import instance from "../../instance/instance";

export default async function acceptReschedule({counselingId}) {
    try {
        const res = await instance.post(`/counseling/status/student/accept/${counselingId}`);
        return res.data;
    } catch (error) {
        return error.response.data;
    }
}