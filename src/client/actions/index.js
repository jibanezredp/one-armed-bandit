/*
 * action types
 */

export const CHANGE_FRUIT = 'CHANGE_FRUIT';

/*
 * constants
 */

const colors = [
  '#F34235', '#E81D62', '#9B26AF', '#6639B6', '#3E50B4', '#2095F2', '#02A8F3',
  '#00BBD3', '#009587', '#4BAE4F', '#FE5621', '#785447', '#9D9D9D', '#5F7C8A',
];

const icons = [
  'ambulance', 'automobile', 'bicycle', 'bus', 'cab', 'car', 'fighter-jet',
  'motorcycle', 'plane', 'rocket', 'ship', 'space-shuttle', 'subway',
  'train', 'truck',
];

const random = (max) => Math.floor(Math.random() * max);

/*
 * action creators
 */

export const changeFruit = (id, color, name) => ({
  type: CHANGE_FRUIT,
  id,
  color,
  name,
});

export const loadFruits = () => {
  return (dispatch) => {
    // loadFruit(0).then(fruit => dispatch(changeFruit(...fruit)));
    // loadFruit(1).then(fruit => dispatch(changeFruit(...fruit)));
    // loadFruit(2).then(fruit => dispatch(changeFruit(...fruit)));
    // loadFruit(3).then(fruit => dispatch(changeFruit(...fruit)));
    // loadFruit(4).then(fruit => dispatch(changeFruit(...fruit)));
    Promise.all([
      loadFruit(0),
      loadFruit(1),
      loadFruit(2),
      loadFruit(3),
      loadFruit(4),
    ]).then(fruits => fruits.forEach((fruit) => dispatch(changeFruit(...fruit))));
  };
};

export const loadFruit = (id) => {
  return new Promise(resolve => {
    const fruit = [
      id,
      colors[random(13)],
      icons[random(14)],
    ];
    setTimeout(() => resolve(fruit), random(10000));
  });
};
