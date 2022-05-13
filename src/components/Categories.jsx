import React from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = [
    'All',
    'Meat Pizzas',
    'Veggie Pizzas',
    'Specials',
    'The Bread Basket',
    'Drinks',
  ];

  const onClickCategories = (index) => {
    setActiveIndex(index);
  };
  return (
    <div class="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            onClick={() => onClickCategories(index)}
            className={activeIndex === index ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
