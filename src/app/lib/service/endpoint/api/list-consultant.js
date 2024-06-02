import instance from "../../instance/instance";

export default async function listConsultant() {
  try {
    const response = await instance.get("/mentor/list");
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}