import instance from "../../instance/instance";

export default async function loginStudent({ nis_or_email, password }) {
    try {
        const response = await instance.post('student/login-student', { nis_or_email, password });

        if (response.status !== 200) {
            throw new Error(`API call failed with status: ${response.status}`);
        }

        const { token, user } = response.data;

        if (token) {
            localStorage.setItem('token', token); 
        }

        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        }

        return response.data;
    } catch (error) {
        if (error.response) {
            return { status: error.response.status, message: error.response.data.message };
        }
        throw error;
    }
}
