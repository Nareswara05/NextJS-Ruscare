import instance from "../../instance/instance";

export default async function availabilityCounseling() {
    try {
        const response = await instance.get("/counseling/student/check");
        return response.data;
    } catch (error) {
        throw error;
    }
}