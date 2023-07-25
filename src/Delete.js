import React, {useState} from "react";

function Delete ({recipeName, recipes, setRecipes}){

const handleDelete = ((index) =>{
setRecipes(recipes.filter((r) =>{
    return r.name !== recipeName
    
}))
})


return <button onClick={handleDelete} name ="delete">Delete</button>
}

export default Delete

