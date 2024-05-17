import { logout } from "../hooks/ApiHooks"

export function LogoutButton(){

    const estilo = {
        height: "50px",
        width: "50px",
        backgroundColor: "#16919b",
        borderRadius: "50%",
        position: "fixed",
        top: "20px",
        left: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

    const handleClick = async() => {
        await logout()
        window.location.href = "/"
    }

    return(
        <div onClick={handleClick} style={estilo}>
            <svg height="40px" width="40px" color="white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
            </svg>
        </div>
    )
}