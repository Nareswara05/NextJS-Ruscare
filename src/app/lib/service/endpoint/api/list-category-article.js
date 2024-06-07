import instance from "../../instance/instance";

export default async function listCategoryArticle() {
    try {
        const response = await instance.get("/category-list");
        return response.data.data;
    } catch (error) {
        console.error(error);
    }
}