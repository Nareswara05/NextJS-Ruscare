import instance from "../../instance/instance";
import getUser from "../user/get-user";

export default async function createCounseling({ date, time, service, category }) {
    try {
        const user = await getUser();
        const studentId = user.id; 
        const gradeId = user.grade_id;

        const response = await instance.post('/counseling/store', {
            grade_id: gradeId,
            student_id: studentId,
            counseling_date: date,
            time,
            service,
            subject: category,
        });

        return response.data;
    } catch (error) {
        console.error('API Error:', error.response.data);
        return error.response.data;
    }
}
