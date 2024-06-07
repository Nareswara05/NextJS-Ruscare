import instance from "../../instance/instance";

export default async function listArticle() {
    try {
        const response = await instance.get("/article/list");
        return response.data.data;
    } catch (error) {
        console.error(error);
    }
}