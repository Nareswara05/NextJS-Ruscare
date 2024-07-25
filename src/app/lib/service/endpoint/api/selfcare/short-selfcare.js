import instance from "../../../instance/instance";

export default async function shortSelfcare() {
    try {
        const response = await instance.get("/short-selfcare/list");
        return response.data;
    } catch (error) {
        return error;
    }
}