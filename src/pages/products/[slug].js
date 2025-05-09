"use client"
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import Cart from '../../components/Cart';
import Sidebar from '../../components/Sidebar';
import { useSidenav } from '../../components/Hooks/context-sidebar';

export async function getStaticPaths() {
  const res = await fetch('https://api-chi-teal-89.vercel.app/api');
  const products = await res.json();

  const paths = products.message.products.map(product => ({
    params: { slug: product.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch('https://api-chi-teal-89.vercel.app/api');
  const products = await res.json();

  const product = products.message.products.find(p =>
    p.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === params.slug
  );

  if (!product) {
    return { notFound: true };
  }

  return {
    props: { product },
    revalidate: 60,
  };
}

const SizeSelector = ({ sizes = ["S", "M", "L", "XL"] }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div>
      <label className="fonts">Select Size:</label>
      <div className="gapss">
        {sizes.map(size => (
          <button
            key={size}
            className={`rounded ${
              selectedSize === size
                ? "bg-black text-white border-black selected"
                : "bg-white text-black border-gray-400 unselected"
            }`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};


export default function ProductDetail({ product }) {
  const [ Nav , setNav ] = useSidenav();
  const dispatch = useDispatch()
  const handleclick = () => {
      dispatch(addToCart(product))
  }

  const router = useRouter();

  if (router.isFallback) return <p>Loading...</p>;

  return (
    <div>
      {Nav &&(<Sidebar/>)}
                <Cart />
                <Navbar />
      <div className='slug1'>
        <div className='slugd'>
          <p><strong>Home</strong> / {product.name}</p>
          <h2>Product Details</h2>
        </div>
        <div className='slug2'>
          <div className='slugimg'>
            <img src={product.img} alt={product.name} />
          </div>
          <div className='slugname'>
            <h1>{product.name}</h1>
            <p><strong>Price:</strong> ${product.price}</p>
            <p>
              {product.name}  Piece Mens Suit Set, Slim Fit Suit for Men, Solid Jacket, Vest, Pants and Tie
            </p>
            <div>
              <SizeSelector />
            </div>
            <button className='added' onClick={handleclick}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
