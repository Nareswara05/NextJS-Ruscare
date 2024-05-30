import instance from "../../instance/instance";

export default async function editUsername({ id, name }) {
  try {
    const response = await instance.post(`/auth/edit-user/${id}`, {
      name: name,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
