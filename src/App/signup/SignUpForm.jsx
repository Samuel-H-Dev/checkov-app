import { useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,
     GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";



const firebaseConfig = {
    apiKey: "AIzaSyCmQV4JuMTMSJbcfHVZijuArBpDGdv7M_Y",
    authDomain: "checkov-sh.firebaseapp.com",
    projectId: "checkov-sh",
    storageBucket: "checkov-sh.appspot.com",
    messagingSenderId: "318594315998",
    appId: "1:318594315998:web:f9193ed0740d51a163b44f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export default function SignUpForm(){
    const  navigate = useNavigate();
    const { setUser} = useContext(AuthContext)

    const handleGoogle = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then(response =>  {
            setUser(response.user)
            navigate("/")
        })
        .catch(err => alert(err.message))
    }


    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;


        createUserWithEmailAndPassword(auth, email, password)
            .then(response =>  {
                setUser(response.user)

                navigate("/")
            })
            .catch(err => alert(err.message))
    }

    return(
    <>
        <form onSubmit={handleSignUp}>
            <label htmlFor="email">
                Email
                <input type="email" name="email" />
            </label>
            <br />
            <label htmlFor="password">
                Password
                <input type="password" name="password" />
            </label>
            <br />
            <input type="submit" value="Sign up" />
        </form>
        <button onClick={handleGoogle}> Sign up with google</button> <br />
    </>
        )
}