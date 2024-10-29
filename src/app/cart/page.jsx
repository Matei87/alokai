'use client';
import { SfIconArrowBack } from '@storefront-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import QuantitySelector from '../../components/QuantitySelector';
import { selectProducts } from '../../redux/selectors.js';
import { useAppSelector } from '../../redux/hooks.js';

const CartPage = () => {
  const products = useAppSelector(selectProducts);

  return (
    <div className='max-w-screen-3xl mx-auto md:px-6 lg:px-10 3xl:px-0'>
      <div className='px-4 md:px-0 mb-20'>
        <div className='flex justify-between mt-8 mb-10'>
          <h1 className='text-3xl md:text-5xl font-bold'>My Cart</h1>

          <Link
            href={'/category'}
            className=' items-center justify-center font-bold text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent hidden md:flex'
          >
            <SfIconArrowBack /> Back to Shopping
          </Link>
        </div>
        <div className='flex gap-4'>
          <div className='flex flex-col gap-4 w-[450px]'>
            {products.slice(0, 3).map(({ image, title, price }) => (
              <div
                key={title}
                className='flex relative border border-neutral-200 rounded-md hover:shadow-xl gap-2 p-4'
              >
                <Link
                  className='absolute inset-0 z-1 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-md'
                  href='#'
                  aria-label={title}
                />
                <Image
                  src={image}
                  alt={title}
                  className='object-contain h-auto rounded-t-md aspect-video'
                  width={150}
                  height={150}
                />
                <div className='flex flex-col justify-between items-start grow h-full '>
                  <p className='font-medium typography-text-base'>
                    {title.slice(0, 20)}
                  </p>

                  <div className='flex justify-between w-full'>
                    <QuantitySelector />

                    <p className='flex self-end font-bold'>${price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='w-[450px] md:p-4 xl:p-6 md:border md:border-neutral-100 md:shadow-lg md:rounded-md md:sticky md:top-20 h-fit mx-auto'>
            <div className='flex justify-between items-center md:items-end mb-5 md:bg-inherit bg-neutral-100 -mx-4 px-4 py-2 md:mx-0 md:p-0'>
              <h2 className='typography-headline-4 md:typography-headline-3 font-bold'>
                Order Summary
              </h2>
              <span className='font-medium'>(Items: 5)</span>
            </div>
            <div className='flex justify-between items-start'>
              <span>Items subtotal</span>
              <div className='flex items-end'>
                <div className='flex flex-col items-end mr-2'></div>
                <div className='flex flex-col items-end'>
                  <p>$1,098.90</p>
                </div>
              </div>
            </div>
            <div className='flex justify-between items-start mt-3'>
              <p>Estimated Sales Tax</p>
              <p>$0.00</p>
            </div>
            <hr className='w-full h-px bg-neutral-200 my-4 max-md:-mx-4 max-md:w-auto' />
            <form className='flex gap-2 items-center justify-between'>
              <span className='flex items-center gap-2 px-4 bg-white rounded-md ring-1 text-neutral-500 hover:ring-primary-700 focus-within:caret-primary-700 active:caret-primary-700 active:ring-primary-700 active:ring-2 focus-within:ring-primary-700 focus-within:ring-2 ring-neutral-200 h-[40px] flex-1'>
                <input
                  className='min-w-[80px] w-full text-base outline-none appearance-none text-neutral-900 disabled:cursor-not-allowed disabled:bg-transparent read-only:bg-transparent'
                  type='text'
                  size={1}
                  placeholder='Enter promo code'
                  required
                  value=''
                />
              </span>
              <button
                type='submit'
                className='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:shadow-none  disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-inset ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50'
              >
                Apply
              </button>
            </form>
            <hr className='w-full h-px bg-neutral-200 my-4 max-md:-mx-4 max-md:w-auto' />
            <div className='flex justify-between items-end mb-5'>
              <h2 className='typography-headline-4 md:typography-headline-3 font-bold'>
                Total
              </h2>
              <h2 className='typography-headline-4 md:typography-headline-3 font-bold'>
                $1,098.90
              </h2>
            </div>
            <hr className='w-full h-px bg-neutral-200 my-4 max-md:-mx-4 max-md:w-auto' />
            <Link
              className='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-3 leading-6 px-6 gap-3 text-white shadow hover:shadow-md active:shadow bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300 w-full mb-4 md:mb-0'
              href='/checkout'
            >
              Go to checkout
            </Link>
            <hr className='h-px bg-neutral-200 my-10 md:hidden -mx-4 w-auto' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
