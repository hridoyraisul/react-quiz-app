import Form from "../Form";
import Illustration from "../Illustration";
import classes from "../../styles/Signup.module.css";
import TextInput from "../TextInput";
import Button from "../Button";

export default function Login(){
    return(
        <>
            <h1>Login Form</h1>
            <div className="column">
                <Illustration/>
                <Form className={`${classes.signup} form`}>
                    <TextInput type="text" placeholder="Enter email" icon="alternate_email"/>
                    <TextInput type="password" placeholder="Enter password" icon="lock"/>
                    <Button><span>Login</span></Button>
                    <div className="info">
                        Don't have an account? <a href="login.html">Sign up</a> instead.
                    </div>
                </Form>
            </div>
        </>
    );
}