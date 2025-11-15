import React from 'react'
import Card from '../components/Card'

const Home = () => {
    var data={
        title:"Aman",
        age:24,
        number:8788987678,
        imgurl:"https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
        desc:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus saepe fugit sapiente perferendis unde eius incidunt ea ipsa quod officiis accusamus, corporis dolorum quasi magnam consectetur tempore! Quo fugiat similique commodi explicabo! Tenetur pariatur, non commodi perspiciatis nobis labore. Nostrum nam alias voluptatibus reiciendis nihil ipsum aliquid. Possimus aliquid inventore maiores unde, quas ex eos veniam",
        
    }
  return (
    <div>
        <h1>Home</h1>
        <Card data={data} color="red"/>
         <Card data={data} color="blue"/>
    </div>
  )
}

export default Home