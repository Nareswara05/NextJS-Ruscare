import changeEmail from '@/app/lib/service/endpoint/user/change-email';
import { useState } from 'react';
import Image from 'next/image';
import Swal from 'sweetalert2';
import { emails } from '@/app/lib/utils/image';

const EmailPopup = ({ userId, closePopup }) => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleChangeEmail = async () => {
        if (email) {
            setIsLoading(true);
            setMessage('');
            try {
                const response = await changeEmail({ id: userId, email });

                if (response.message === 'Email berhasil diubah') {
                    Swal.fire({
                        icon: 'success',
                        title: 'Berhasil',
                        text: 'Email telah terverifikasi.',
                        confirmButtonText: 'OK'
                    }).then(() => {
                        closePopup();
                    });
                } else {
                    console.error("Error updating email:", response.message);
                    setMessage('Error: ' + response.message);
                }
            } catch (error) {
                console.error("Error updating email:", error);
                setMessage('Terjadi kesalahan. Coba lagi nanti.');
            }
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-textPrimary">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                <Image
                src={emails}
                width={500}
                height={500}
                className='mx-auto mb-1 w-52'
                />
                <h2 className="text-xl font-bold text-textPrimary">Masukkan email kamu</h2>
                <h2 className="text-md font-medium mb-5">Demi keamanan akun, kamu harus memverifikasi email kamu terlebih dahulu </h2>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan email kamu disini"
                    className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {message && (
                    <div className={`mb-4 text-sm text-red-500`}>
                        {message}
                    </div>
                )}
                <div className='flex gap-2'>
                    <button
                        onClick={handleChangeEmail}
                        className="w-full bg-primary hover:bg-purple-700 text-white font-semibold rounded hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Loading...' : 'Submit'}
                    </button>
                    <button
                        onClick={closePopup}
                        className="w-full py-3 bg-gray-400 text-white rounded font-semibold hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-700"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmailPopup;
