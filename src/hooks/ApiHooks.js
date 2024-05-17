import { useContext, useEffect, useState } from "react"
import { KeyboardContext } from "../contexts/InputContext"
import { saveToken, deleteToken, getToken } from "../helpers/tokenHelpers"
import { LOGIN_ENDPOINT, LOGOUT_ENDPOINT, SECTORES_ENDPOINT, TURNOS_ENDPOINT } from "../services/myApi"


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

export async function logout(){
    const token = getToken()
    console.log(token)

    try {
        const res = await fetch(LOGOUT_ENDPOINT.url, LOGOUT_ENDPOINT.POST.config({token}));
        if (!res.ok) {
            if (res.status === 401) {
                throw new Error();
            }
        }
        const data = await res.json();
        deleteToken()
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export function useLogin(){
    const [dni, setDni] = useState('')

    useEffect(() => {

        if(dni!=''){
            const data = {
                dni: dni
            };

            fetch(LOGIN_ENDPOINT.url, LOGIN_ENDPOINT.POST.config({data}))
                .then(async res => {
                    if(!res.ok){
                        if(res.status == 422){
                            throw new Error()
                        }
                        if(res.status == 401){
                            alert("Se te registro en el sistema")
                            const res = await registerUser(dni)
                            return res.json()
                        }
                    }
                
                    return res.json()
                })
                .then(response => {
                    saveToken(response)
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
    
    const token = getToken()

    useEffect(() => {
        fetch(SECTORES_ENDPOINT.url, SECTORES_ENDPOINT.GET.config({token}))
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
                console.log(data)
                setCategories(data)
            })
            .catch(error => {
                console.log(error)
                /* window.location.href = "/" */
            })
    }, [])

    return {categories}
}

export function useAddCategory(){

    const [object, setObject] = useState(null)

    if(object!=null){
        const token = getToken()
            
        const data = {
            sector_id: object.sector,
            letra_id: object.letra,
        };

    
        fetch(TURNOS_ENDPOINT.url, TURNOS_ENDPOINT.POST.config({data, token}))
         .then(res => {
            if(!res.ok){
                if(res.status = 401){
                    throw new Error("No estas autorizado, primero registrate por favor")
                }
                return res.json()
            }
         })
         .then(async response => {
            console.log(response)
            await logout()
            deleteToken()
            window.location.href = "/"
         })
         .catch(error => {
            alert(error)
            window.location.href = "/"
         })
    }
    return {setObject}

}

export function useTurnos(){

    const token = "asdasdasd"
    const [response, setResponse] = useState()

    useEffect(() => {
        fetch(TURNOS_ENDPOINT.url, TURNOS_ENDPOINT.GET.config({token}))
         .then(res => res.json())
         .then(data => {
            console.log(data)
            setResponse(data)
        })
        .catch(error => {
            console.log(error)
        })
    } ,[])
    return response
}
