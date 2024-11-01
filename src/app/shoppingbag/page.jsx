'use client';
import { SfButton, SfIconArrowBack } from '@storefront-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import QuantitySelector from '../../components/QuantitySelector.jsx';
import { selectCart } from '../../store/selectors.js';
import { useAppSelector, useAppDispatch } from '../../store/hooks.js';
import { removeProductFromCart } from '../../store/slice.js';

const ShoppingBag = () => {
  const cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  const itemsQuantity = cart
    .map((items) => items.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  const totalItemsPrice = cart
    .map((item) => item.quantity * item.price)
    .reduce((prev, curr) => prev + curr, 0)
    .toFixed(2);

  return (
    <>
      <div className='max-w-[1536px] mx-auto'>
        <div className='px-4 md:px-0 my-20'>
          <div className='flex justify-between mt-8 mb-10'>
            <div className='flex gap-2'>
              <h1 className='text-2xl md:text-3xl font-bold uppercase'>
                Shopping bag
              </h1>
              <span className='self-center text-xl'>
                {itemsQuantity > 0 && `(${itemsQuantity}  items)`}
              </span>
            </div>

            <Link
              href={'/category'}
              className=' items-center justify-center font-bold text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent hidden md:flex'
            >
              <SfIconArrowBack /> Back to Shopping
            </Link>
          </div>
          <div className='flex gap-4'>
            {/* PRODUCTS */}
            <div className='flex flex-col gap-4 w-[450px]'>
              {cart.map(({ id, image, title, price, quantity }) => (
                <div
                  key={id}
                  className='flex relative justify-between items-center border border-neutral-200 rounded-md md:shadow-lg gap-2 p-4'
                >
                  <Link
                    className='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-md'
                    href={`/product/${id}`}
                    aria-label={title}
                  >
                    <Image
                      src={image}
                      alt={title}
                      className='object-contain h-auto rounded-t-md aspect-video'
                      width={150}
                      height={150}
                    />
                  </Link>

                  <div className='flex flex-col justify-center items-center gap-3'>
                    <p className='font-medium typography-text-base'>
                      {title.slice(0, 20)}
                    </p>

                    <QuantitySelector quantity={quantity} />

                    <p className='flex font-bold'>${price}</p>
                  </div>

                  <SfButton
                    className='flex  leading-5 text-white text-xs border-none py-1 px-1 greyscale'
                    onClick={() => {
                      dispatch(removeProductFromCart(id));
                    }}
                  >
                    Remove
                  </SfButton>
                </div>
              ))}
            </div>
            {/* PRODUCTS */}

            {/* ORDER SUMMARY */}
            <div className='w-[450px] md:border md:border-neutral-100 md:shadow-lg md:rounded-md md:sticky md:top-20 h-fit mx-auto'>
              <div className='md:p-4 xl:p-6 '>
                <h2 className='typography-headline-4 md:typography-headline-3 font-bold mb-5 md:bg-inherit bg-neutral-100 -mx-4 px-4 py-2 md:mx-0 md:p-0'>
                  Order Summary
                </h2>
                <div className='flex justify-between items-start'>
                  <span>Items subtotal</span>
                  <div className='flex items-end'>
                    <div className='flex flex-col items-end mr-2'></div>
                    <div className='flex flex-col items-end'>
                      <p>${totalItemsPrice}</p>
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
                      defaultValue=''
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
                    ${totalItemsPrice}
                  </h2>
                </div>
                <hr className='w-full h-px bg-neutral-200 my-4 max-md:-mx-4 max-md:w-auto' />
                <Link
                  className='inline-flex items-center justify-center font-medium text-base uppercase focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-3 leading-6 px-6 gap-3 text-white shadow hover:shadow-md active:shadow bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300 w-full mb-4 md:mb-0'
                  href='/checkout'
                >
                  Go to checkout
                </Link>
                <hr className='h-px bg-neutral-200 my-10 md:hidden -mx-4 w-auto' />
              </div>
            </div>

            {/* ORDER SUMMARY */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingBag;
