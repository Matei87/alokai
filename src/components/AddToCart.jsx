'use client';
import {
  SfButton,
  SfIconCheckCircle,
  SfIconClose,
  SfIconShoppingCart,
} from '@storefront-ui/react';
import Link from 'next/link';

function handleClick() {
  return (
    <div
      role='alert'
      className='absolute top-20 right-2 flex items-start md:items-center max-w-[600px] shadow-md bg-positive-100 pr-2 pl-4 ring-1 ring-positive-200 typography-text-sm md:typography-text-base py-1 rounded-md'
    >
      <SfIconCheckCircle className='my-2 mr-2 text-positive-700 shrink-0' />
      <p className='py-2 mr-2'>The product has been added to the cart.</p>
      <Link href={'/cart'} className='underline text-lime-500'>
        View Cart
      </Link>

      <button
        type='button'
        className='p-1.5 md:p-2 ml-auto rounded-md text-positive-700 hover:bg-positive-200 active:bg-positive-300 hover:text-positive-800 active:text-positive-900 focus-visible:outline focus-visible:outline-offset'
        aria-label='Close positive alert'
      >
        <SfIconClose className='hidden md:block' />
        <SfIconClose size='sm' className='block md:hidden' />
      </button>
    </div>
  );
}

export default function AddToCart() {
  return (
    <SfButton
      size='sm'
      slotPrefix={<SfIconShoppingCart size='sm' />}
      onClick={() => handleClick()}
    >
      Add to cart
    </SfButton>
  );
}
