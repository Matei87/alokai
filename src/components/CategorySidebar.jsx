'use client';
import CategoryFilter from './CategoryFilter';

const CategorySidebar = ({ categories, slug }) => {
  return (
    <>
      <h2 className='text-3xl font-bold'>
        {slug && slug[0]
          ? slug[0].charAt(0).toUpperCase() +
            slug[0].slice(1).replace('%20', ' ')
          : 'All Categories'}
      </h2>
      <CategoryFilter categories={categories} slug={slug} />
    </>
  );
};

export default CategorySidebar;
