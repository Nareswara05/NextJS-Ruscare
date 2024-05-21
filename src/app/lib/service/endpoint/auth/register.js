import instanceAxios from "../../instance/instance";
export default async function register({ name, email, password }) {
  try {
    const res = await instanceAxios.post("/auth/register", {
        name: name,
        email: email,
        password: password,
       
    }
    );  

    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
