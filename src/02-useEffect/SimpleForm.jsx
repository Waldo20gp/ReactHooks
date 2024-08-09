import { useEffect, useState } from "react"

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: "WallexZ",
        email: "waldo@gmail.com"
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const {name ,value} = target;
        setFormState({
            ...formState,
            [ name ] : value
        });
    }


    useEffect(()=>{
        console.log("Se llamo el use effect")
    }, []);
    
    useEffect(()=>{
        console.log("Se llamo el use effect por form state")
    }, [formState]);

    useEffect(()=>{
        console.log("Se llamo el use effect por form state en email")
    }, [email]);

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input
                type="text"
                className="form-control mt-2"
                placeholder="Username"
                name="username"
                value={username}
                onChange={ onInputChange }
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="waldo@gmail.com"
                name="email"
                value={email}
                onChange={ onInputChange }
            />


        </>
    )
}
