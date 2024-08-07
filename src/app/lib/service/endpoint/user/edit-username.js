import instance from "../../instance/instance";

export default async function editUsername({ id, username }) {
  try {
    const response = await instance.post(`/student/edit-username/${id}`, {
      username: username,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
