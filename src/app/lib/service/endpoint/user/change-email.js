import instance from "../../instance/instance";

export default async function changeEmail({ id, email }) {
    try {
        const response = await instance.post(`/auth/edit-email/${id}`, {
        email: email,
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}