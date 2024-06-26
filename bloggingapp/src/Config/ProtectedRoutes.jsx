import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { auth } from "./firebaseConfig";


const ProtectedRoutes = ({components}) => {
    const [isUser,setisUser] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if (user) {
                const uid = user.uid;
                console.log(uid);
                setisUser(true);
                return
              } else {
                navigate('/SignIn');
                console.log('user is not logged in');
              }
        })
    },[])
  return (
    <>
       {isUser ? components :<div>Loading</div> }
    </>
  )
}

export default ProtectedRoutes