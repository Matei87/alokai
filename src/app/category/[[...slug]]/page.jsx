'use client';
import { use } from 'react';
import { selectProducts } from '../../../redux/selectors.js';
import { useAppSelector } from '../../../redux/hooks';
import CategorySidebar from '../../../components/CategorySidebar';
import ProductCard from '../../../components/ProductCard';

const Category = ({ params }) => {
  const { slug } = use(params);

  const products = useAppSelector(selectProducts);
  const categories = [...new Set(products.map((product) => product.category))];

  const withAllCategories = ['all', ...categories];
  const productFiltered =
    slug !== undefined
      ? products.filter(
          (product) => product.category === slug[0].replace('%20', ' ')
        )
      : products;

  return (
    <div className='flex justify-center items-center gap-12 md:py-16 md:items-start md:mx-auto xl:max-w-[1536px]'>
      <aside className='hidden md:flex w-3/12 flex-col justify-center gap-4 mx-auto'>
        <CategorySidebar categories={withAllCategories} slug={slug && slug} />
      </aside>
      <main className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        {productFiltered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
};

export default Category;
