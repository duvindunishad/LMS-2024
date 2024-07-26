// src/CategorySlider.js
import './slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAppleAlt, faCarrot, faFish, faDrumstickBite, faCheese, faPizzaSlice, faIceCream } from '@fortawesome/free-solid-svg-icons';

const categories = [
  { name: 'Category 1', icon: faCoffee },
  { name: 'Category 2', icon: faAppleAlt },
  { name: 'Category 3', icon: faCarrot },
  { name: 'Category 4', icon: faFish },
  { name: 'Category 5', icon: faDrumstickBite },
  { name: 'Category 6', icon: faCheese },
  { name: 'Category 7', icon: faPizzaSlice },
  { name: 'Category 8', icon: faIceCream }
];

const slider = () => {
  return (
    <div className="slider-container">
      <div className="slider">
        {categories.map((category, index) => (
          <div key={index} className="slider-item">
            <FontAwesomeIcon icon={category.icon} size="2x" />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default slider;
