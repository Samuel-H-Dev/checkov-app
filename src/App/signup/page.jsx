import { Link } from "react-router-dom"
import { useState } from "react";
import SignUpForm from "./SignUpForm"

export default function SignUp(){
    const [todoItems, setTodoItems] = useState();


    return(
        <main>
            <h1>Sign Up</h1>
            <SignUpForm />
            Already a User? <Link to="/login">Login</Link>
        </main>
    )
}