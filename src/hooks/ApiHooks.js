import { useContext, useEffect, useState } from "react"
import { KeyboardContext } from "../contexts/InputContext"


export function useCheckMessage(){
    const { text } = useContext(KeyboardContext)
    const [message, setMessage] = useState('')

    useEffect(() => {
        if(text === ''){
            setMessage('INGRESE SU DNI PARA CONTINUAR')
        }
        if(text.length<8 && text != ''){
            setMessage("TU DNI DEBE TENER 8 CARACTERES")
        }
        if(text.length === 8){
            setMessage("PULSE LA TECLA ENTER PARA CONTINUAR")
        }
        
    }, [text])
    return {text, message}
}

async function saveToken(res) {
    const token = {
        token: res.access_token,
        tokenType: res.token_type
    };

    try {
        await window.localStorage.setItem('token', JSON.stringify(token));
        console.log(token);
    } catch (error) {
        console.error("Error al guardar el token:", error);
        throw error; // Propaga el error para que pueda ser manejado externamente
    }
}

export function registerUser(dni) {
    return new Promise((resolve, reject) => {
        const url = 'http://127.0.0.1:8000/api/register';
        const data = {
            dni: dni
        };
        const configPost = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(url, configPost)
            .then(res => {
                if (!res.ok) {
                    if (res.status === 422) {
                        throw new Error("Error en la sintaxis");
                    }
                }
                resolve(res);
            })
            .catch(error => {
                reject(error);
            });
    });
}


export function useLogin(){
    const [dni, setDni] = useState('')

    useEffect(() => {

        if(dni!=''){

            const url = 'http://127.0.0.1:8000/api/login';
        
            const data = {
                dni: dni
            };
        
            const configPost = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept' : 'aplication/json'
                },
                body: JSON.stringify(data)
            }

            fetch(url, configPost)
                .then(async res => {
                    if(!res.ok){
                        if(res.status == 422){
                            throw new Error("Tu dni debe tener 8 caracteres")
                        }
                        if(res.status == 401){
                            alert("Se te registro en el sistema")
                            const res = await registerUser(dni)
                            return res.json()
                        }
                    }
                
                    return res.json()
                })
                .then(async response => {
                    await saveToken(response)
                    window.location.href = '/category';
                
                })
                .catch(error => {
                    alert(error);
                });
        }
    
    }, [dni])

    return {setDni}
}

export function useCategories(){
    const [categories, setCategories] = useState(null)
    
    const tokenString = window.localStorage.getItem('token')
    let tokenObjeto = JSON.parse(tokenString)

    const config = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenObjeto.token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/sectores", config)
            .then(response => {
                if (!response.ok) {
                    if (response.status === 401) {
                        throw new Error("No estás autorizado para acceder a esta página.");
                    }
                    throw new Error("Error en la solicitud: " + response.status);
                }
                return response.json();
            })
            .then(data => {
                console.log("correcto")
                setCategories(data)
            
            })
            .catch(error => {
                console.log(error)

            })
    }, [])

    return {categories}
}

export function useAddCategory(){

    const [object, setObject] = useState(null)

    if(object!=null){
        const tokenString = window.localStorage.getItem('token')
        let tokenObjeto = JSON.parse(tokenString)
        const url = 'http://127.0.0.1:8000/api/turnos';
            
        const request = {
            sector_id: object.sector,
            letra_id: object.letra,
        };
            
        const configPost = {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + tokenObjeto.token,
                'Content-Type': 'application/json',
                'Accept' : 'aplication/json'
            },
            body: JSON.stringify(request)
        }
    
        fetch(url, configPost)
         .then(res => res.json())
         .then(data => {
            console.log(data)
            console.log(request)
         })
         .catch(error => {
            console.log(error)
         })
    }
    return {setObject}

}
