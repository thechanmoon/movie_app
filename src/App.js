import React from 'react';
// import Watermelon from './Watermelon'
// const cube = [1728, 729];

// const cubeRoot = () => 
// {
//   for (let index = 0; index < cube.length; index++) {
//     const element = cube[index];
//     '<div>{element}</div>`
//   }
// };
const fruits = 
  [
   {
     name:"Watermelon", 
     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Watermelon_seedless.jpg/220px-Watermelon_seedless.jpg"
   },
   {
    name:"Grape", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/220px-Table_grapes_on_white.jpg"
   }
  ]

// const fruits = ["water melon", "grape"]

function Fruit({name,image}){
return (
  <div>
    <h3>{name} is my favorite fruit  !!</h3>
    <img src={image} alt={name}/>
  </div>
  )}

function App() {
  let index = 0;
  return (
  <div>
  {
    
  fruits.map( function (fruit){
    return <Fruit key = {index++} name = {fruit.name} image = {fruit.image}> </Fruit>
  })
  }
  </div>
  );
}

{/* <div className="someDiv">
{
  collection.map(function (item) {
    return <div> {item.Name} {this.getItemInfo(item)} </div>
})
}
</div> */}

export default App;
