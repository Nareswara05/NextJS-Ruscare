import instanceAxios from "../../instance/instance";

export default async function AvailabilityEmail(email) {
    try {
        const response = await instanceAxios.get('/check-email', {
            headers: {
                'Content-Type': 'application/json' 
            },
            params: { email } 
        });

        if (response.status !== 200) {
            throw new Error(`API call failed with status: ${response.status}`);
        }

        const data = response.data; 
        return data.available;
    } catch (error) {
        console.error("Error checking email availability:", error);
        return false; 
    }
}
