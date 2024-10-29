'use client';
import { use } from 'react';
import { redirect } from 'next/navigation';
import ProductDetails from '../../../components/ProductDetails';
import Gallery from '../../../components/Gallery';
import ProductCard from '../../../components/ProductCard';
import { selectProducts } from '../../../redux/selectors.js';
import { useAppSelector } from '../../../redux/hooks';

const ProductPage = ({ params }) => {
  const { code } = use(params);
  const products = useAppSelector(selectProducts);

  const product = products.filter((prod) => prod.id === +code);

  const relatedProducts = products
    .filter((prod) => prod.category === product[0].category)
    .filter((prod) => prod.id !== +code);

  if (product === null) {
    redirect('/not-found');
  }

  const images = [
    {
      imageSrc: product[0].image,
      alt: product[0].title,
    },
  ];

  return (
    <section className='flex flex-col gap-12 p-12'>
      <section className='flex flex-col md:flex-row md:gap-12'>
        <Gallery images={images} />
        <ProductDetails product={product[0]} />
      </section>
      {relatedProducts.length > 0 && (
        <section className='flex flex-col gap-12'>
          <h2 className='text-3xl font-bold'>Related products</h2>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {/* <ProductSlider products={relatedProducts} /> */}
        </section>
      )}
    </section>
  );
};

export default ProductPage;
