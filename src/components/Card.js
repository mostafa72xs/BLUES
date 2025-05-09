"use client"
import React ,{useState} from 'react'
import Loading from './Hooks/Loading';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import Link from 'next/link'


function Card(props) {
  const [loading , setloading] = useState(false);

/*   const {addItem} = useCart()
 */
const dispatch = useDispatch();
const slug = props.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');


  const handleclick = () => {
/*     addItem(props.item);*/
    dispatch(addToCart(props.item))
    setloading(true);
    setTimeout(()=>{
        setloading(false);
    },2000);
}
  return (
    <div className='card' keys={props.key}>
      <Link href={`/products/${slug}`} className='cardLink' style={{color:'black'}}>
      <div>
        <img src={props.image} alt='imgg' />
      </div>
        <h1 style={{color:'black'}}>{props.title}</h1>
        </Link>
        <p className='spaa'>${props.price}</p>
        <button onClick={handleclick}>
          {
            loading ? (<Loading />) : ("Add to cart")
          }
        </button>
    </div>
  )
}

export default Card