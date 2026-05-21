import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'


const LoginSchema = z.object({
    email: z.string().email().trim(),
    password: z.string().min(8)
    .regex(/[a-zA-Z]/,)
    .regex(/[0-9]/)
    .regex(/[^a-zA-Z0-9]/)
})

function Login() => async() {
    return(
        <>
        <div className="Login-container" > 

            <div className="instractions">

            </div>


            <div className="inputs">
                 <div>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" id="email" />
                 </div>

                  <div>
                         <label htmlFor="">Password</label>
                         <input name="password" type="password" />
                 </div>

            </div>
       

        </div>
        </>
    )
}

export default Login;