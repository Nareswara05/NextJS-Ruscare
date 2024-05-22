import instance from "../../instance/instance";

export default async function Logout() {
  try {
    const response = await instance.post('/auth/logout');
    return response.data; 
  } catch (error) {
    throw new Error('Gagal logout'); 
  }
};

