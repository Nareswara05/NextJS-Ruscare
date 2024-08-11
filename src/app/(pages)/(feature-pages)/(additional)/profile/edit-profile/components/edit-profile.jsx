"use client";

import React, { useState, useEffect } from 'react';
import EditForm from './edit-form';
import ChangeProfilePicture from './change-profile-picture';
import ButtonSubmit from './button-submit';
import Swal from 'sweetalert2';
import editUsername from '@/app/lib/service/endpoint/user/edit-username';
import getUser from '@/app/lib/service/endpoint/user/get-user';
import changeProfilePicture from '@/app/lib/service/endpoint/user/change-profile-picture';

const EditProfile = () => {
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await getUser();
        console.log("Fetched user:", user);
        if (user) {
          setUserId(user.id);
          setImage(user.image);
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handlePopup = () => {
    Swal.fire({
      title: "Apakah kamu yakin ingin mengganti username ?",
      text: "Pastikan username yang kamu isi sudah benar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Iya, ganti username!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleEdit();
      }
    });
  };

    const handleEdit = async () => {
      console.log("handleEdit called");
      console.log("Username:", username);
      console.log("User ID:", userId);
      if (!userId || !username) {
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
          icon: "error",
          title: "Username tidak boleh kosong"
        });
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
          window.location.reload();
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

    const handleImageChange = async (file) => {
      if (!userId) return;

      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to update your profile picture?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update it!',
        cancelButtonText: 'Cancel'
      });

      if (result.isConfirmed) {
        try {
          const response = await changeProfilePicture({ id: userId, file });
          console.log("Response from image update:", response);

          if (response && response.message === 'Image berhasil diubah') {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Profile picture updated successfully!',
            });
            const updatedUser = await getUser();
            setImage(updatedUser.image);
          } else {
            throw new Error(response.message || 'Image update failed');
          }
        } catch (error) {
          console.error("Error during image update:", error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.message || 'Failed to update profile picture. Please try again.',
          });
        }
      }
    };


    return (
      <div className='flex gap-20'>
        <ChangeProfilePicture image={image} onImageChange={handleImageChange} />
        <div className='flex flex-col w-full items-end'>
          <EditForm
            placeholder="Masukkan Nama Baru Anda"
            label="Ganti Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <ButtonSubmit onClick={handlePopup} title="Update Profile" />
        </div>
      </div>
    );
  };

  export default EditProfile;
