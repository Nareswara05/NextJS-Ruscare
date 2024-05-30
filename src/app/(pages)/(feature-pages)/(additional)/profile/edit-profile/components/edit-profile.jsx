"use client";

import React, { useState, useEffect } from 'react';
import EditForm from './edit-form';
import ChangeProfilePicture from './change-profile-picture';
import ButtonSubmit from './button-submit';
import editUsername from '@/app/lib/service/endpoint/auth/edit-username';
import Swal from 'sweetalert2';

const EditProfile = () => {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    console.log("Stored user:", storedUser);
    if (storedUser) {
      setUserId(storedUser.id);
    }
  }, []);

  const handleEdit = async () => {
    console.log("handleEdit called");
    console.log("Username:", username);
    console.log("User ID:", userId);
    if (!userId || !username) {
      alert("User ID and Username are required");
      return;
    }

    try {
      const response = await editUsername({ id: userId, name: username });
      console.log("Response from registration:", response);
      if (response && response.message === 'Username has been updated') {
        Swal.fire({
          icon: 'success',
          title: 'Berhasil',
          text: 'Username berhasil di ubah!',
        });
      }
    } catch (error) {
      console.error("Error during registration:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Gagal mengubah username!, silahkan coba lagi!',
      });
    }
  };

  return (
    <div className='flex gap-20'>
      <ChangeProfilePicture />
      <div className='flex flex-col w-full items-end'>
        <EditForm
          placeholder="Masukkan Nama Baru Anda"
          label="Ganti Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <ButtonSubmit onClick={handleEdit} title="Ganti Username" />
      </div>
    </div>
  );
};

export default EditProfile;
