import instance from "../../instance/instance";

export default async function listArticle(category = "") {
    try {
        const url = category ? `/article/show-by/category/${category}` : "/article/list";
        const response = await instance.get(url);
        return response.data.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}
