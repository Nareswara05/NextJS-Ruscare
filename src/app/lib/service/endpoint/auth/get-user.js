import instance from "../../instance/instance";

export default async function getUser() {
  try {
    const response = await instance.get('/auth/data-user');
    return response.data;
  } catch (error) {
    console.error("Terjadi kesalahan saat mengambil data pengguna:", error);
    throw error;
  }
}
