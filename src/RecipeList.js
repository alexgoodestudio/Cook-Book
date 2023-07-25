import Delete from "./Delete";
import React, {useState} from "react";


function RecipeList({recipes,setRecipes}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list ">
         <table>
         <thead>
           
              <th >Name</th>
              <th>Cuisine</th>
              <th>Photo</th>
              <th>Ingredients</th>
              <th>Preparation</th>
              <th>Actions</th>
          
          </thead>
          </table>
         
          
          <table>
          <tbody>
            {recipes.map((r) =>(
              <tr key={r.name}>

                <td >
                  {r.name}
                </td>
              
                <td >
                  {r.cuisine}
                </td>
                
                <td>
                  <img src ={r.photo} 
                 />
                </td>

                <td >
                  <p>
                  {r.ingredients}
                  </p>
                </td>

                <td>
                  {r.preparation}
                </td>

                <td>
                  <Delete recipeName= {r.name} recipes ={recipes} setRecipes ={setRecipes} />
                </td>

              </tr>
            ))}
          </tbody>
        </table>
   {/* map method to create new rows or list 
   preparation and ingredients need className="content_td" to display scrollbar which is a requirement */}
        
    </div>
  );
}

export default RecipeList;
