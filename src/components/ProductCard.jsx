'use client';
import { SfRating, SfCounter, SfLink } from '@storefront-ui/react';
import Image from 'next/image';
import AddToCart from './AddToCart.jsx';

const ProductCard = ({ product }) => {
  const { id, image, title, price, rating } = product;

  return (
    <div className='border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]'>
      <div className='relative'>
        <SfLink href={`/product/${id}`} className='block'>
          <Image
            src={image}
            alt='Great product'
            className='object-contain h-auto rounded-md aspect-square'
            width='300'
            height='300'
          />
        </SfLink>
      </div>
      <div className='p-4 border-t border-neutral-200  flex flex-col gap-2'>
        <p>{title?.slice(0, 25)}</p>

        <div className='flex items-center'>
          <SfRating size='xs' value={rating?.rate} max={5} />
          <SfCounter size='xs'>{rating?.count}</SfCounter>
        </div>
        <span className='block font-bold typography-text-lg'>${price}</span>
        <AddToCart />
      </div>
    </div>
  );
};

export default ProductCard;
