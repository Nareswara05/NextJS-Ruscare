import instance from "../../instance/instance";

export default async function getStatusCounseling() {
    try {
        const response = await instance.get("/data/status-counseling-list");
        console.log("Respons API:", response.data);
        return response.data.data;
    } catch (error) {
        console.error("Error API:", error.response); 
        return [];
    }
}