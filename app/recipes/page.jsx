import RecipeList from "@/components/recipe-list";
import Link from "next/link";
const fetchData = async () => {
    try {
        const response = await fetch("https://dummyjson.com/recipes")
        const data = await response.json()
        return data?.recipes
     } catch (error) {
        throw new Error(error)
     }
     
}
const Recipe =async () => {
    const recipeList = await fetchData()
    return ( 
        <div>
            <div className="flex h-full items-center justify-between px-6 sm:ml-[46px] sm:mr-[46px] m-0">
             <Link href={"/"} className="flex items-center space-x-2 bg-black hover:bg-white hover:text-black text-gray-100 px-4 py-2 mt-6 rounded transition duration-150">Go Home</Link>

             <p className=" py-6 sm:text-4xl text-2xl font-bold text-rose-600 ">Recipe</p>
            </div>
            <RecipeList recipeList={recipeList}/>
        </div>
     );
}
 
export default Recipe;