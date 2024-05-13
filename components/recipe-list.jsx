import Link from "next/link";

const RecipeList = async ({ recipeList }) => {
  // console.log(recipeList);
  return (
    <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {recipeList && recipeList.length > 0
          ? recipeList.map((recipe) => (
              <Link
                key={recipe.id}
                href={`/recipes/${recipe.id}`}
                className="border p-4 shadow-md"
              >
                <img
                  alt={recipe.name}
                  src={recipe.image}
                  className="h-64 w-full object-cover sm:h-80 lg:h-96"
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  {recipe.name}
                </h3>

                <p className="mt-2 max-w-sm text-gray-700 font-semibold">
                  Cuisine: {recipe.cuisine}
                </p>
                <p className="mt-2 max-w-sm text-gray-700 font-semibold">
                  Rating: {recipe.rating}
                </p>
              </Link>
            ))
          : null}

        {/* <Link href="#" className="block">
       <Image alt={recipeList.name} src={recipeList.image} height={30} width={30}/>

        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
          Lorem, ipsum dolor.
        </h3>

        <p className="mt-2 max-w-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
          reiciendis sequi ipsam incidunt.
        </p>
      </Link> */}
      </div>
    </div>
  );
};

export default RecipeList;
