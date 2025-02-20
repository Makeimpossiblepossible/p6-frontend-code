import { Link } from "react-router-dom";

const Home = () => {
  const recipes = [
    { id: 1, title: "Spaghetti Bolognese", description: "A classic Italian dish." },
    { id: 2, title: "Chocolate Cake", description: "Rich and delicious." },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Recipes</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="p-4 bg-white rounded shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
