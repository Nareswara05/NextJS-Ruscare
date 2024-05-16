import React from 'react'
import ButtonSubmit from './button-submit'
import EditForm from './edit-form'

const ChangeEmail = () => {
    return (
        <div>
            <h1 className='text-[24px] font-bold text-textPrimary'>Ganti Email</h1>
            <div className='flex flex-col gap-4 pt-6'>
                <EditForm
                    placeholder="Masukkan Email Lama"
                    label="Email Lama"
                    type="email"
                />
                <EditForm
                    placeholder="Masukkan Email Baru"
                    label="Email Baru"
                    type="email"
                />
            </div>
            <div className='flex items-end justify-end'>
                <ButtonSubmit
                title="Ganti Email"
                />
            </div>
        </div>
    )
}

export default ChangeEmail