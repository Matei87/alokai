'use client';
import {
  SfRating,
  SfButton,
  SfLink,
  SfCounter,
  SfIconCompareArrows,
  SfIconFavorite,
  SfIconPackage,
  SfIconWarehouse,
  SfIconSafetyCheck,
  useDisclosure,
} from '@storefront-ui/react';
import { useAppDispatch } from '../store/hooks.js';
import { addToCart } from '../store/slice.js';
import MiniBag from './MiniBag.jsx';

const ProductDetails = ({ product }) => {
  const { isOpen, open, close } = useDisclosure({ initialValue: false });
  const dispatch = useAppDispatch();

  return (
    <section className='md:max-w-[640px]'>
      <h1 className='mb-1 font-bold typography-headline-4'>{product.title}</h1>
      <strong className='block font-bold typography-headline-3'>
        ${product.price}
      </strong>
      <div className='inline-flex items-center mt-4 mb-2'>
        <SfRating size='xs' value={product.rating.rate} max={5} />
        <SfCounter className='ml-1' size='xs'>
          {product.rating.count}
        </SfCounter>
        <SfLink
          href='#'
          variant='secondary'
          className='ml-2 text-xs text-neutral-500'
        >
          {product.rating.count} reviews
        </SfLink>
      </div>
      <p
        className='mb-4 font-normal typography-text-sm'
        dangerouslySetInnerHTML={{ __html: product.description }}
      ></p>
      <div className='py-4 mb-4 border-gray-200 border-y'>
        {/* <div className='bg-primary-100 text-primary-700 flex justify-center gap-1.5 py-1.5 typography-text-sm items-center mb-4 rounded-md'>
          <SfIconShoppingCartCheckout />1 in cart
        </div> */}
        <div className='items-start xs:flex'>
          {/* <div className='flex flex-col items-stretch xs:items-center xs:inline-flex'>
            <div className='flex border border-neutral-300 rounded-md'>
              <SfButton
                variant='tertiary'
                square
                className='rounded-r-none p-3'
                disabled={value <= min}
                aria-controls={inputId}
                aria-label='Decrease value'
                onClick={() => dec()}
              >
                <SfIconRemove />
              </SfButton>
              <input
                id={inputId}
                type='number'
                role='spinbutton'
                className='grow appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm'
                min={min}
                max={max}
                value={value}
                onChange={handleOnChange}
              />
              <SfButton
                variant='tertiary'
                square
                className='rounded-l-none p-3'
                disabled={value >= max}
                aria-controls={inputId}
                aria-label='Increase value'
                onClick={() => inc()}
              >
                <SfIconAdd />
              </SfButton>
            </div>
            <p className='self-center mt-1 mb-4 text-xs text-neutral-500 xs:mb-0'>
              <strong className='text-neutral-900'>{max}</strong> in stock
            </p>
          </div> */}
          <SfButton
            size='lg'
            className='w-full uppercase'
            onClick={() => {
              dispatch(addToCart(product));
              open();
            }}
          >
            Add to bag
          </SfButton>
        </div>
        <div className='flex justify-center mt-4 gap-x-4'>
          <SfButton
            size='sm'
            variant='tertiary'
            slotPrefix={<SfIconCompareArrows size='sm' />}
          >
            Compare
          </SfButton>
          <SfButton
            size='sm'
            variant='tertiary'
            slotPrefix={<SfIconFavorite size='sm' />}
          >
            Add to list
          </SfButton>
        </div>
      </div>
      <div className='flex first:mt-4'>
        <SfIconPackage
          size='sm'
          className='flex-shrink-0 mr-1 text-neutral-500'
        />
        <p className='text-sm'>
          Free shipping, arrives by Thu, Apr 7. Want it faster?
          <SfLink href='#' variant='secondary' className='mx-1'>
            Add an address
          </SfLink>
          to see options
        </p>
      </div>
      <div className='flex mt-4'>
        <SfIconWarehouse
          size='sm'
          className='flex-shrink-0 mr-1 text-neutral-500'
        />
        <p className='text-sm'>
          Pickup not available at your shop.
          <SfLink href='#' variant='secondary' className='ml-1'>
            Check availability nearby
          </SfLink>
        </p>
      </div>
      <div className='flex mt-4'>
        <SfIconSafetyCheck
          size='sm'
          className='flex-shrink-0 mr-1 text-neutral-500'
        />
        <p className='text-sm'>
          Free 30-days returns.
          <SfLink href='#' variant='secondary' className='ml-1'>
            Details
          </SfLink>
        </p>
      </div>
      <MiniBag isOpen={isOpen} close={close} />
    </section>
  );
};

export default ProductDetails;
