import instance from "../../instance/instance";

export default async function changeProfilePicture({ file }) {
    try {
        const formData = new FormData();
        formData.append('image', file);

        const response = await instance.post(`/student/edit-image`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error during image update:', error);
        return error.response?.data || { message: 'An unknown error occurred' };
    }
}
