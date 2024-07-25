import instance from "../../instance/instance";


export default async function listSelfcare() {
    try {
        const response = await instance.get("/selfcare/list");
        return response.data.data;
    } catch (error) {
        return error;
    }
}