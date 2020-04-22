import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://en.wikipedia.org/wiki/Kimchi#/media/File:Various_kimchi.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Cutlet",
    image: "https://en.wikipedia.org/wiki/Cutlet#/media/File:Escalope2.jpg",
    rating: 3,
  },
  {
    id: 3,
    name: "Chicken",
    image:
      "https://en.wikipedia.org/wiki/Fried_chicken#/media/File:Fried-Chicken-Set.jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "Hamburger",
    image:
      "https://makeyourmeals.com/wp-content/uploads/2019/06/grilled-hamburger-1.jpg",
    rating: 2,
  },
];
function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>Rating: {rating}/5</h4>
      <img src={picture} alt={name} />
    </div>
  );
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
