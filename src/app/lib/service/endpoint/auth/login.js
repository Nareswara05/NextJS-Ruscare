import instanceAxios from "../../instance/instance";

export default async function login({ email, password }) {
  try {
    const response = await instanceAxios.post('auth/login', { email, password });

    if (response.status !== 200) {
      throw new Error(`API call failed with status: ${response.status}`);
    }

    const { token } = response.data;

    if (token) {
      localStorage.setItem('token', token); 
    }

    if (response.data && response.data.user) {
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }

    return response.data;
  } catch (error) {
    if (error.response) {
      return { status: error.response.status, message: error.response.data.message };
    }
    throw error;
  }
}
