
import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Los simpson'])

  console.log(categories)

  const addCategory = (newCategory) => {

    (categories.find((categorie) => (categorie.trim().toUpperCase() == newCategory.trim().toUpperCase())))
      ? ""
      : setCategories([newCategory, ...categories])

    // setCategories(cat => [...cat, 'Dragon Ball']);

  }

  const resetCategory = () => {


  }

  return (
    <>

      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(value) => addCategory(value)} />


      {categories.map((category) => (

        <GifGrid

          key={category}

          category={category}
        />

      ))}


    </>
  )
}
