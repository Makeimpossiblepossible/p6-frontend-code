import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = { title: "Spaghetti Bolognese", ingredients: ["Pasta", "Meat", "Tomato Sauce"] };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{recipe.title}</h1>
      <h2 className="text-xl mt-4">Ingredients:</h2>
      <ul className="list-disc pl-5">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetail;
