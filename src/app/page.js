'use client';
import { selectProducts } from '../redux/selectors';
import { useAppSelector } from '../redux/hooks';
import Banner from '../components/Banner.jsx';
import Hero from '../components/Hero.jsx';
import ProductSlider from '../components/ProductSlider.jsx';

export default function Home() {
  const products = useAppSelector(selectProducts);

  console.log(products);

  return (
    <main className='flex flex-col justify-center align-center gap-6 mx-auto max-w-[1536px]'>
      <Hero product={products[1]} />
      <Banner product={products[0]} />
      <ProductSlider products={products.slice(0, 10)} />
    </main>
  );
}
