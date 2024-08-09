
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
    
    const {onInputChange, username, email, password , onResetForm} = useForm({
        username: '',
        email: '',
        password: ''
    })

    // const {username, email, password} = formState

    return (
        <>
            <h1>Formulario con custom hook</h1>
            <hr />

            <input
                type="text"
                className="form-control mt-2"
                placeholder="Username"
                name="username"
                value={username}
                onChange={ onInputChange }
            />

            {
                username === 'WallexZ' && <Message />
            }


            <input
                type="email"
                className="form-control mt-2"
                placeholder="waldo@gmail.com"
                name="email"
                value={email}
                onChange={ onInputChange }
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={ onInputChange }
            />

            <button className="btn btn-secondary mt-2" onClick={onResetForm}>Reset</button>

            
        </>
    )
}
