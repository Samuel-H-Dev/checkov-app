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
    <section className="bg-violet-950 p-6 rounded-lg max-w-[420px] mx-auto">
        <form onSubmit={handleSignUp} className="flex flex-col items-start justify-around min-h-[25vh]">
            <label htmlFor="email" className="flex justify-between w-full">
            <span>Email:</span>
                <input type="email" name="email" className="rounded-lg border-transparent border border-violet-500 py-2 px-4 bg-zinc-50 text-zinc-700 placeholder-zinc-400 text-base focus:ring-2 focus:ring-violet-600 focus:border-transparent"/>
            </label>
           
            <label htmlFor="password" className="flex justify-between w-full">
            <span>Password:</span>
                <input type="password" name="password" className="rounded-lg border-transparent border border-violet-500 py-2 px-4 bg-zinc-50 text-zinc-700 placeholder-zinc-400 text-base focus:ring-2 focus:ring-violet-600 focus:border-transparent"/>
            </label>
           
            <input type="submit" value="Sign up" className="bg-green-300 text-violet-950 py-2 px-8 rounded-lg shadow-lg transition duration-300 hover:bg-green-500 hover:shadow-sm cursor-pointer w-full"/>
        </form>
        <button onClick={handleGoogle} className="bg-sky-300 text-violet-950 py-2 px-8 rounded-lg shadow-lg transition duration-300 hover:bg-violet-500 hover:shadow-sm cursor-pointer"> 
        Sign up with google</button>
    </section>
        )
}