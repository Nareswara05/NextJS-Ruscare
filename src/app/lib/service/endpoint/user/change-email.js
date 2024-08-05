import instance from "../../instance/instance";

export default async function changeEmail({ id, email }) {
    try {
        const response = await instance.post(`/student/edit-email/${id}`, {
        email: email,
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}