export function saveToken(res) {
    const token = res.access_token
    window.localStorage.setItem('token', JSON.stringify(token))
    const verificion = window.localStorage.getItem('token')
    
    if(verificion){
        console.log("Se guardo el token correctamente")
    } else {
        console.log("No se pudo cargar el token")
    }

}
export function getToken(){
    const tokenString = window.localStorage.getItem('token')
    if(tokenString){
        console.log(JSON.parse(tokenString))
        return JSON.parse(tokenString)
    } else{
        console.log("Error al obtener token")
        return ""
    }
}
export function deleteToken(){
    window.localStorage.removeItem('token');

    const token = window.localStorage.getItem('token')
    if(token){
        console.log("No se elimino")
        return
    }
    console.log("Se elimino correctamente")

}