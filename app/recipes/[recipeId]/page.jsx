import RecipeDetails from "@/components/recipe-details";

const fetchDetails = async (currentRecieId) => {
  try {
    const response = await fetch(
      `https://dummyjson.com/recipes/${currentRecieId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
const RecipeId = async ({ params }) => {
  const finalData = await fetchDetails(params?.recipeId);
  return (
    <div>
      <RecipeDetails getData={finalData} />
    </div>
  );
};

export default RecipeId;
