import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { CategoryContext } from '../utils/CategoryContext';

function Dropdown({categories}) {
  const { setSelectedCategory } = useContext(CategoryContext);
  const categorieFilter =(categorie)=>{
    setSelectedCategory(categorie)
   }

  return (
    <div className='flex justify-center '>
      <div class="dropdown">
        <button class="dropbtn hover:text-[dodgerblue] rounded-md px-3 py-2 text-md font-medium" style={{ whiteSpace: 'nowrap'}}>PRODUCTS &nbsp;
        <i class="fa-solid fa-caret-down icon-1 "></i>
        <i class="fa-sharp fa-solid fa-caret-up icon-2" ></i>
        </button>
        <div class="dropdown-content" style={{zIndex:200}}>
         {categories.map(categorie=><Link onClick={()=>categorieFilter(categorie)} value={categorie}>{categorie}</Link>)}
        </div>
    </div>
    </div>
  )
}

export default Dropdown