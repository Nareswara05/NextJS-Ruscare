import instance from "../../instance/instance";

export default async function listArticle(category = "", search = "") {
    try {
        let url;
        if (search) {
            url = `article/search/${search}`;
        } else {
            url = category ? `/article/show-by/category/${category}` : "/article/list";
        }
        const response = await instance.get(url);
        return response.data.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}
