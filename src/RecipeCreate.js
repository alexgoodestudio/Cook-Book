import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers


  const initialFormState ={
    name: "",
    cuisine:"",
    photo: "",
    ingredients:"",
    preparation:"",
  }

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange =((event) =>{
    setFormData({...formData,
    [event.target.name]: event.target.value,

    })
  })

  const handleSubmit = ((event) =>{
    event.preventDefault();
    setRecipes([...recipes, formData])
    setFormData(initialFormState)
    
  })

  
  return (
    <form name="create" className="recipe-list" onSubmit={handleSubmit}>
      
      <table>
      <tbody>
          <tr>
            <td>
              
                <input 
                  name="name" 
                  id="name" 
                  type="img" 
                  onChange ={handleChange} 
                  value={formData.name}
                  placeholder="Name"/>
                  
              
            </td>

            <td>
              
                <input 
                  name="cuisine"
                  id="cuisine"
                  type="text"
                  onChange ={handleChange} 
                  value={formData.cuisine}
                  placeholder="Cuisine"/>
             
            </td>

            <td>
              
                <input
                  name="photo" 
                  id="photo" 
                  type="text" 
                  onChange ={handleChange} 
                  value={formData.photo}
                  placeholder="URL"/>
              
            </td>

            <td>
              
                <textarea 
                  name="ingredients" 
                  id="ingredients" 
                  type="text" 
                  onChange ={handleChange} 
                  value={formData.ingredients}
                  placeholder="Ingredients">
                </textarea>
              
            </td>

            <td>
              <label htmlFor="preparation">
                <textarea 
                  name="preparation" 
                  id="preparation" 
                  type="text" 
                  onChange ={handleChange} 
                  value={formData.preparation}
                  placeholder="Preparations">
                </textarea>
              </label>
              </td>

            <td>
              <button type="submit" value={formData.action}>Create</button>
            </td>

          </tr>
      </tbody>
    </table>
  </form>
  );
}

export default RecipeCreate;


  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked


//    STARTER CODE
//   return (
//     <div className="recipe-list">
//       <table>
//         <thead>
//           <tr>
//             <th></th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
        
//         </tbody>
//       </table>
//     </div>
//   );
// }