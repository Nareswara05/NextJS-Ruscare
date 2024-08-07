"use client";

import React, { useState, useEffect } from 'react';
import EditForm from './edit-form';
import ChangeProfilePicture from './change-profile-picture';
import ButtonSubmit from './button-submit';
import Swal from 'sweetalert2';
import editUsername from '@/app/lib/service/endpoint/user/edit-username';
import getUser from '@/app/lib/service/endpoint/user/get-user';

const EditProfile = () => {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState(null);

  // useEffect(() => {
  //   const storedUser = JSON.parse(localStorage.getItem('user'));
  //   console.log("Stored user:", storedUser);
  //   if (storedUser) {
  //     setUserId(storedUser.id);
  //   }
  // }, []);

  useEffect(() => {
    const fetchUserData = async () => {
        try {
            const user = await getUser();
            console.log("Fetched user:", user);
            if (user) {
                setUserId(user.id);
            }
        } catch (error) {
            console.error("Failed to fetch user data:", error);
        }
    };

    fetchUserData();
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
      const response = await editUsername({ id: userId, username: username });
      console.log("Response from registration:", response);
      if (response && response.message === 'Username berhasil diubah') {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
          }
      });

      Toast.fire({
          icon: "success",
          title: "Username berhasil diubah"
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
