import { CategoryScreen } from "../components/Screens";
import './../assets/styles/CategoryPage.css'


export function CategoryBtn({category}){
    return(
        <button className="category">
            {category}
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
    return(
        <CategoryScreen>
            <CategoryConteiner>
                <CategoryBtn category={"Category"}/>
                <CategoryBtn category={"Category"}/>
                <CategoryBtn category={"Category"}/>
                <CategoryBtn category={"Category"}/>
            </CategoryConteiner>
        </CategoryScreen>
    )

}