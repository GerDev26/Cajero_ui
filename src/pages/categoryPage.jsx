import { SpinLoader } from "../components/Loaders";
import { CategoryScreen } from "../components/Screens";
import { useAddCategory, useCategories } from "../hooks/ApiHooks";
import './../assets/styles/CategoryPage.css'


export function CategoryBtn({category}){

    const {setObject} = useAddCategory()

    const handleClick = () => {
        setObject({
            sector: category.id,
            letra: category.letra_id
        })
    }
    return(
        <button onClick={handleClick} className="category">
            {category.descripcion}
        </button>
    )
}

export function CategoryConteiner({children}){
    return(
        <section className="category-container">
            {children}
        </section>
    )
}

export function CategoryPage(){
    
    const {categories} = useCategories()

    return(
        <CategoryScreen>
            <CategoryConteiner>
                {categories
                ? categories.map(category => <CategoryBtn key={category.id} category={category}/>)
                : <SpinLoader/>
                }
            </CategoryConteiner>
        </CategoryScreen>
    )

}