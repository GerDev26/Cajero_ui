export function SpinLoader(){

    const spinnerStyle = {
        border: "6px solid #ffffff",
        width: "46px",
        height: "46px",
        borderRadius: "50%",
        borderLeftColor: "transparent",
        zIndex: "10000",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        animation: "spin 1s linear infinite"
      }
    return(
        <div style={spinnerStyle}> </div>
    )
}