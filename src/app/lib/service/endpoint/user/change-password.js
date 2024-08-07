import instance from "../../instance/instance";

export default async function changePassword({ id, password }) {
    try {
        const response = await instance.post(`/student/edit-password/${id}`, {
        password: password,
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}