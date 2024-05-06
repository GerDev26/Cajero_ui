import './../assets/styles/Screens.css'


export function MainScreen({children}){
    return(
        <div className='screen main-screen'>
            
            {children}
            <img className='main-screen-img' src="./../../public/img/background.jpg" alt="" />

        </div>
    )
}
export function CategoryScreen({children}){
    return(
        <div className='screen category-screen'>
            
            {children}
            <img className='main-screen-img' src="./../../public/img/background.jpg" alt="" />

        </div>
    )
}


export function KeyboardScreen({children}){
    return(
        <div className='screen keyboard-screen'>
            
            {children}

        </div>
    )
}
