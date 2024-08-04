import instance from '../../instance/instance';

export default async function Logout() {
    try {
        await instance.post('auth/logout');

        document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';

        localStorage.removeItem('token');
    } catch (error) {
        console.error('Failed to logout:', error);
        throw error;
    }
}
