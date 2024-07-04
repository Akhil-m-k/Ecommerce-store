import React, { useContext, useEffect, useState } from 'react'
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import ProductsSkeleton from '../skeletons/ProductsSkeleton';
import { SearchContext } from '../utils/SearchContext';
import { ToastContainer, toast } from 'react-toastify';
import { CategoryContext } from '../utils/CategoryContext';

const  getProducts = async (setAllProducts,setFilteredProducts)=>{
    try{
    const data = await fetch("https://fakestoreapi.com/products");
    const originalData = await data.json();
    setAllProducts(originalData);
    setFilteredProducts(originalData);
    }catch(err){
        console.log(err);
    }
}

function Home() {
    const { searchTerm } = useContext(SearchContext);
    const { selectedCategory } = useContext(CategoryContext);
    const [allProducts,setAllProducts] = useState([]);
    const [filteredProducts,setFilteredProducts] = useState([]);

    useEffect(()=>{
        getProducts(setAllProducts,setFilteredProducts);
        window.scrollTo(0,0);
    },[]);

    useEffect(()=>{
        const data =allProducts.filter(product=> product.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredProducts(data)
    },[searchTerm])

    useEffect(()=>{
        const data =allProducts.filter(product=> product.category.toLowerCase().includes(selectedCategory.toLowerCase()));
        setFilteredProducts(data)
    },[selectedCategory])
  return (
    <div className='card-section min-h-lvh pb-10 sm:mx-auto flex flex-col items-center pt-28 px-5'>
        <ToastContainer style={{marginTop:"48px"}}/>
        {filteredProducts.length === 0 ?<ProductsSkeleton/>: 
         <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-16 sm:gap-10  sm:px-10 px-8" data-testid="res-list" >
            {filteredProducts.map((product)=> {
                return (
                    <Link  to="#" >
                        <Card  product={product} toast={toast}/>
                    </Link>
                )
            }
            )}
         </div>
            }
    </div>
  )
}

export default Home;