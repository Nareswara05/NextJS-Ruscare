import instance from "../../instance/instance";

export default async function editUsername({ username }) {
  try {
    const response = await instance.post('/student/edit-username', {
      username: username,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
