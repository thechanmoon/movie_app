import React from 'react';
import PropTypes from 'prop-types';

const fruits = 
  [
   {
    id: 0, 
    name:"Watermelon", 
     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Watermelon_seedless.jpg/220px-Watermelon_seedless.jpg",
    likes: 5
    },
   {
    id: 1,
    name:"Grape", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/220px-Table_grapes_on_white.jpg",
    likes: 4
  }
  ]

  fruits.propTypes = 
  {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired
  }
// const fruits = ["water melon", "grape"]

function Fruit({name,image, likes}){
return (
  <div>
    <h3>{name} is my favorite fruit  !!</h3>
    <h2>{likes}/5.0</h2>
    <img src={image} alt={name}/>
  </div>
  )}

function App() {
  // let index = 0;
  return (
  <div>
  {
    
  fruits.map( fruit => {
    // return <Fruit key = {index++} name = {fruit.name} image = {fruit.image}> </Fruit>
    return <Fruit key = {fruit.id} name = {fruit.name} image = {fruit.image} likes = {fruit.likes}> </Fruit>
  })
  }
  </div>
  );
}

export default App;
