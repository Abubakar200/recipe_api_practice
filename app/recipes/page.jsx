import RecipeList from "@/components/recipe-list";
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
             <p className="text-center py-6 text-4xl font-bold text-rose-600 ">Recipe</p>
            <RecipeList recipeList={recipeList}/>
        </div>
     );
}
 
export default Recipe;