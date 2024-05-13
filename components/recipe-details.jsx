import Link from "next/link";

const RecipeDetails = ({ getData }) => {
  return (
    <div className="space-y-8 mt-10">
    <Link href={"/recipes"} className="sm:ml-20 ml-6 space-x-2 bg-black hover:bg-white hover:text-black text-gray-100 px-4 py-2 rounded transition duration-150">Go To recipes</Link>
    <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
                
      <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
        <div className=" w-full lg:sticky top-0 sm:flex gap-2">
          <img
            src={getData?.image}
            alt={getData.name}
            className="w-full shadow-lg rounded object-contain"
          />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-gray-950">
            {getData.name}
          </h2>
          <div className="gap-4 mt-5">
            <p className="text-2xl text-gray-700">Type: {getData?.mealType[0]}</p>
          </div>
          <div className="mt-5">
            <p className="text-xl text-gray-800">Cuisune: {getData?.cuisine}</p>
          </div>
          <div className="mt-5">
            <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
              {getData?.ingredients.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RecipeDetails;
