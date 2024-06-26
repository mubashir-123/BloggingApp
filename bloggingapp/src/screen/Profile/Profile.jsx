import React, { useRef, useState } from 'react';
import { updatePassword } from "firebase/auth";
import { auth } from '../../Config/firebaseConfig';
import editicon from '../../assets/edit_icon.png';
import defaultImage from '../../assets/profile.jpg';
import addimage from '../../assets/Addimage.png';
import Swal from 'sweetalert2'

const Profile = () => {
    const [imageUrl, setImageUrl] = useState(defaultImage); // Initial state with default image
    const [editingFirstName, setEditingFirstName] = useState(false);
    const [editingLastName, setEditingLastName] = useState(false);
    const [editingPassword, setEditingPassword] = useState(false);
    const [printFName, setPrintFName] = useState("");
    const [printLName, setPrintLName] = useState("");

    const fname = useRef();
    const lname = useRef();
    const passwordupdate = useRef();

    const handleChangeImage = () => {
        const newImageUrl = 'path-to-your-new-image.jpg'; // Replace with your new image URL
        setImageUrl(newImageUrl);
    };

    const FirstName = () => {
        setEditingFirstName(true); // Show input field
    }

    const LastName = () => {
        setEditingLastName(true); // Show input field
    }

    const Changepassword = () => {
        setEditingPassword(true); //Show input field
    }

    const fnameSubmit = () => {
        if (fname.current.value != "") {
            setPrintFName(fname.current.value);
            setEditingFirstName(false);
        }
        else {
            Swal.fire({
                title: "Enter any name",
                // text: "Example: Alex",
                icon: "question"
            });
            setEditingFirstName(true);
        }


    }

    const lnameSubmit = () => {
        if (lname.current.value != "") {
            setPrintLName(lname.current.value);
            setEditingLastName(false);
        }
        else {
            Swal.fire({
                title: "Enter any name",
                // text: "Example: Alex",
                icon: "question"
            });
            setEditingLastName(true);
        }
    }

    const passwordSubmit = () => {
        const user = auth.currentUser;

        if (passwordupdate.current.value != "") {
            updatePassword(user, passwordupdate.current.value).then(() => {
                console.log(passwordupdate.current.value);
                const Toast = Swal.mixin({
                    toast: true,
                    position: "center",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Password Updated Successfully "
                });
                passwordupdate.current.value = '';
                setEditingPassword(false);

            }).catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something wents wrong"
                });
                console.log(error);
                setEditingPassword(true);
            });
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Alert",
                text: "password should not be empty"
            });
        }
    }
    return (
        <>
            <div className="flex flex-col gap-4 w-full items-center py-28 lg:px-96 md:px-56 sm:px-24">

                {/* Profile Icon */}
                <div className="skeleton h-72 w-80">
                    <div>
                        <img src={imageUrl} alt="Image" className="w-full max-w-xs h-72" />
                        <button onClick={handleChangeImage} className="relative bottom-8 w-7 h-7"><img src={addimage} alt='Add Image'/></button>
                    </div>
                </div>
                {/* Fisrt Name */}
                <div>
                    {editingFirstName ? (
                        <div className='inline-flex w-80'>
                            <input type="text" placeholder="Type Fisrt Name" className="input input-bordered w-full max-w-xs h-12" ref={fname} />

                            <button onClick={fnameSubmit} className="btn btn-success">Update</button>
                        </div>

                    ) : (
                        <div className="skeleton h-12 w-80 text-wrap flex items-center justify-between pl-3 bg-white">
                            <label>{printFName}</label>
                            <button onClick={FirstName}><img className="w-[35px] h-[35px]" src={editicon} alt="Edit icon" /></button>
                        </div>
                    )}
                </div>

                {/* Last Name */}
                <div>
                    {editingLastName ? (
                        <div className='inline-flex w-80'>
                            <input type="text" placeholder="Type Last Name" className="input input-bordered w-80 max-w-xs h-12" ref={lname} />

                            <button onClick={lnameSubmit} className="btn btn-success">Update</button>
                        </div>

                    ) : (
                        <div className="skeleton h-12 w-80 text-wrap flex items-center justify-between pl-3 bg-white">
                            <label>{printLName}</label>
                            <button onClick={LastName}><img className="w-[35px] h-[35px]" src={editicon} alt="Edit icon" /></button>
                        </div>
                    )}

                </div>


                {/* Update Password */}
                <div>
                    {editingPassword ? (
                        <div className='inline-flex w-80'>
                            <input type="password" minLength={8} placeholder="Type password" className="input input-bordered w-80 max-w-xs h-12" ref={passwordupdate} />

                            <button onClick={passwordSubmit} className="btn btn-success">Update</button>
                        </div>
                    ) : (
                        <button onClick={Changepassword} className="btn btn-accent mt-5">Update Password</button>
                    )}
                </div>
            </div>
        </>
    )
}

export default Profile;
