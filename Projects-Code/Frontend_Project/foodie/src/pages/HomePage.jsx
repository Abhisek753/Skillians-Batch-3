import React, { use, useEffect, useState } from 'react'
import FilterBar from '../components/layout/FilterBar'
import ProductCard from '../components/common/ProductCard';

const HomePage = () => {
const [loading,setLoading]=useState(false);
const [products,setProducts]=useState([]);        
const [error,setError]=useState(null);
const [searchTerm, setSearchTerm] = useState('');
const [sortOption, setSortOption] = useState('');
const [selectedCategory, setSelectedCategory] = useState(null);
const [categories,setCategories]=useState([]);
const [filtered,setFiltered]=useState([]);





  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:3000/products');
            const data = await response.json();
            const resCategory= await fetch('http://localhost:3000/categories');
            const dataCategory= await resCategory.json();
            setCategories(dataCategory);
            setProducts(data);
        } catch (error) {
            setError(error);
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
       
    }
    fetchData();
  }, [])

  useEffect(() => {
    let temp = [...products];

    console.log(selectedCategory)
    if(selectedCategory && selectedCategory !== 'all') {

      temp = temp.filter(
        (p) => p.category === selectedCategory
      );
    }

  //search
  if (searchTerm) {
    temp = temp.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );}

    //sort
    if (sortOption === 'priceLowHigh') {
      temp.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceHighLow') {
      temp.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'ratingHighLow') {
      temp.sort((a, b) => b.rating - a.rating);
    }

    setFiltered(temp);

  },[products,searchTerm,sortOption,selectedCategory])

  return (
    <div className='px-4'>
        <h1 className='text-2xl font-semibold mb-4' >Food Items</h1>
        <FilterBar categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          sortOption={sortOption}
          onSortChange={setSortOption}  
          />
       {error && <div className='text-red-500'>Error loading products.</div>}
      {!loading && !error && products.length!==0 &&(
        <div className=' mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {filtered?.map((product)=>(
            <div key={product.id}>
              <ProductCard product={product}/>
            </div>
         
          ))}
              
        </div>
      )}

    </div>
  )
}

export default HomePage