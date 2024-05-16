import React from 'react'

import EditForm from './edit-form';
import ChangeProfilePicture from './change-profile-picture';
import ButtonSubmit from './button-submit';




const EditProfile = () => {
    return (
        <div className='flex gap-20'>
            <ChangeProfilePicture/>
            <div className='flex flex-col w-full items-end'>
                <EditForm
                    placeholder="Masukkan Nama Baru Anda"
                    label="Ganti Username"
                />
                <ButtonSubmit
                title="Ganti Username"
                />
            </div>
        </div>
    )
}

export default EditProfile