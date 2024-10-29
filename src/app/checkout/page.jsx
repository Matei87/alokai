import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CheckoutPage = () => {
  return (
    <main>
      <div className='max-w-screen-3xl mx-auto md:px-6 lg:px-10 3xl:px-0'>
        <div className='px-4 md:px-0 mb-20'>
          <div className='flex justify-between mt-8 mb-10'>
            <h1 className='typography-headline-3 md:typography-headline-2 font-bold'>
              Checkout
            </h1>
            <Link
              className='items-center justify-center font-medium focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed leading-5 text-sm py-1.5 px-3 gap-1.5 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent flex md:hidden whitespace-nowrap'
              href='/cart'
            >
              <svg
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                className='inline-block fill-current w-6 h-6 undefined'
              >
                <path d='m10.875 19.3-6.6-6.6a.883.883 0 0 1-.213-.325A1.115 1.115 0 0 1 4 12c0-.133.02-.258.062-.375a.883.883 0 0 1 .213-.325l6.6-6.6a.978.978 0 0 1 .687-.288.933.933 0 0 1 .713.288c.2.183.304.412.313.687a.933.933 0 0 1-.288.713L7.4 11h11.175a.97.97 0 0 1 .713.287.97.97 0 0 1 .287.713.97.97 0 0 1-.287.712.968.968 0 0 1-.713.288H7.4l4.9 4.9c.183.183.28.417.288.7a.872.872 0 0 1-.288.7c-.183.2-.417.3-.7.3a.988.988 0 0 1-.725-.3Z'></path>
              </svg>
              Back
            </Link>
            <Link
              className='items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent hidden md:flex'
              href='/cart'
            >
              <svg
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                className='inline-block fill-current w-6 h-6 undefined'
              >
                <path d='m10.875 19.3-6.6-6.6a.883.883 0 0 1-.213-.325A1.115 1.115 0 0 1 4 12c0-.133.02-.258.062-.375a.883.883 0 0 1 .213-.325l6.6-6.6a.978.978 0 0 1 .687-.288.933.933 0 0 1 .713.288c.2.183.304.412.313.687a.933.933 0 0 1-.288.713L7.4 11h11.175a.97.97 0 0 1 .713.287.97.97 0 0 1 .287.713.97.97 0 0 1-.287.712.968.968 0 0 1-.713.288H7.4l4.9 4.9c.183.183.28.417.288.7a.872.872 0 0 1-.288.7c-.183.2-.417.3-.7.3a.988.988 0 0 1-.725-.3Z'></path>
              </svg>
              Back
            </Link>
          </div>
          <div className='md:grid md:grid-cols-12 md:gap-x-6'>
            <div className='col-span-7'>
              <hr className='w-full h-px bg-neutral-200  md:w-auto -mx-4 md:mx-0' />
              <div className='md:px-4 py-6'>
                <div className='flex justify-between items-center'>
                  <h2 className='typography-headline-4 text-neutral-900 font-bold mb-4'>
                    Contact Information
                  </h2>
                </div>
                <div className='w-full md:max-w-[520px]'>
                  <p>
                    Add your email and phone number to communicate with the
                    store.
                  </p>
                  <button
                    type='button'
                    className='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500  disabled:shadow-none  disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-inset ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50 mt-4 w-full md:w-auto'
                  >
                    Add contact information
                  </button>
                </div>
              </div>
              <hr className='w-full h-px bg-neutral-200  md:w-auto -mx-4 md:mx-0' />
              <div className='md:px-4 py-6' />
              <div className='flex justify-between items-center'>
                <h2 className='typography-headline-4 text-neutral-900 font-bold mb-4'>
                  Billing Address
                </h2>
              </div>
              <div className='w-full md:max-w-[520px]'>
                <p>
                  Add a billing address. You will receive the invoice to the
                  email address provided above.
                </p>
                <button
                  type='button'
                  className='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500  disabled:shadow-none  disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-inset ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50 mt-4 w-full md:w-auto'
                >
                  Add billing address
                </button>
              </div>
            </div>
            <hr className='w-full h-px bg-neutral-200  md:w-auto -mx-4 md:mx-0' />
            <div className='md:px-4 py-6'>
              <div className='flex justify-between items-center'>
                <h2 className='typography-headline-4 text-neutral-900 font-bold mb-4'>
                  Shipping Address
                </h2>
              </div>
              <div className='w-full md:max-w-[520px]'>
                <p>Add a shipping address to view shipping details.</p>
                <button
                  type='button'
                  className='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500  disabled:shadow-none  disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-inset ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50 mt-4 w-full md:w-auto'
                >
                  Add shipping address
                </button>
              </div>
            </div>
            <hr className='w-full h-px bg-neutral-200 md:w-auto -mx-4 md:mx-0' />
            <div
              data-testid='shipping-method-section'
              className='md:px-4 my-6'
            />
            <div className='flex justify-between items-center'>
              <h3 className='typography-headline-4 text-neutral-900 font-bold'>
                Shipping details
              </h3>
            </div>
            <div className='mt-4'>
              <div className='flex mb-6'>
                <svg
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  className='inline-block fill-current w-6 h-6 mr-2 text-neutral-500'
                >
                  <path d='M12 22a9.733 9.733 0 0 1-3.9-.788 10.092 10.092 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.733 9.733 0 0 1 2 12a9.74 9.74 0 0 1 .788-3.9 10.092 10.092 0 0 1 2.137-3.175c.9-.9 1.958-1.613 3.175-2.138A9.743 9.743 0 0 1 12 2a9.74 9.74 0 0 1 3.9.787 10.105 10.105 0 0 1 3.175 2.138c.9.9 1.612 1.958 2.137 3.175A9.733 9.733 0 0 1 22 12a9.733 9.733 0 0 1-.788 3.9 10.092 10.092 0 0 1-2.137 3.175c-.9.9-1.958 1.612-3.175 2.137A9.733 9.733 0 0 1 12 22Zm0-2c2.233 0 4.125-.775 5.675-2.325C19.225 16.125 20 14.233 20 12c0-.9-.146-1.767-.438-2.6A7.94 7.94 0 0 0 18.3 7.1L7.1 18.3c.7.55 1.467.97 2.3 1.262.833.292 1.7.438 2.6.438Zm-6.3-3.1L16.9 5.7a7.96 7.96 0 0 0-2.3-1.262A7.805 7.805 0 0 0 12 4c-2.233 0-4.125.775-5.675 2.325C4.775 7.875 4 9.767 4 12c0 .9.146 1.767.438 2.6.291.833.712 1.6 1.262 2.3Z'></path>
                </svg>
                <p>Not available until a shipping address is provided.</p>
              </div>
            </div>
          </div>
          <hr className='w-full h-px bg-neutral-200  md:w-auto -mx-4 md:mx-0' />
          <div className='md:px-4 py-6'>
            <h3 className='typography-headline-4 text-neutral-900 font-bold mb-4'>
              Payment method
            </h3>
            <div className='grid gap-4 grid-cols-2'>
              <button
                type='button'
                className='border border-1 border-neutral-200 rounded h-20 flex items-center justify-center disabled:bg-neutral-100 disabled:opacity-50 focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600'
              >
                <svg
                  viewBox='0 0 24 24'
                  data-testid='credit-card'
                  xmlns='http://www.w3.org/2000/svg'
                  className='inline-block fill-current w-6 h-6 mr-2'
                >
                  <path d='M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2Zm0 14H4v-6h16v6Zm0-10H4V6h16v2Z'></path>
                </svg>
                <span className='font-medium'>Credit Card</span>
              </button>
              <button
                type='button'
                disabled
                className='border border-1 border-neutral-200 rounded h-20 flex items-center justify-center disabled:bg-neutral-100 disabled:opacity-50 focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600'
              >
                <div className='flex flex-col items-center justify-center'>
                  <Image
                    alt='Paypal Icon'
                    loading='lazy'
                    width='104'
                    height='32'
                    decoding='async'
                    data-nimg='1'
                    style={{ color: 'transparent' }}
                    src='/_next/static/media/paypal.7de2d221.svg'
                  />
                  <span className='text-xs text-neutral-500'>Coming soon</span>
                </div>
              </button>
              <button
                type='button'
                data-testid='payment-method'
                disabled
                className='border border-1 border-neutral-200 rounded h-20 flex items-center justify-center disabled:bg-neutral-100 disabled:opacity-50 focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600'
              >
                <div className='flex flex-col items-center justify-center'>
                  <Image
                    alt='Apple Pay Icon'
                    loading='lazy'
                    width='104'
                    height='32'
                    decoding='async'
                    data-nimg='1'
                    style={{ color: 'transparent' }}
                    src='/_next/static/media/apple-pay.6f486fa0.svg'
                  />
                  <span className='text-xs text-neutral-500'>Coming soon</span>
                </div>
              </button>
              <button
                type='button'
                data-testid='payment-method'
                disabled
                className='border border-1 border-neutral-200 rounded h-20 flex items-center justify-center disabled:bg-neutral-100 disabled:opacity-50 focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600'
              >
                <div className='flex flex-col items-center justify-center'>
                  <Image
                    alt='Google Pay icon'
                    loading='lazy'
                    width='104'
                    height='32'
                    decoding='async'
                    data-nimg='1'
                    style={{ color: 'transparent' }}
                    src='/_next/static/media/google-pay.cae68ca9.svg'
                  />
                  <span className='text-xs text-neutral-500'>Coming soon</span>
                </div>
              </button>
            </div>
          </div>
          <div id='payment-element' className='md:px-4 py-6'></div>
          <hr className='w-full h-px bg-neutral-200 md:w-auto -mx-4 md:mx-0 mb-10' />
        </div>
        <div className='col-span-5 md:p-4 xl:p-6 md:border md:border-neutral-100 md:shadow-lg md:rounded-md md:sticky md:top-20 md:mb-10 h-fit'>
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
                <p data-testid='special-price'>$1,098.90</p>
              </div>
            </div>
          </div>
          <div className='flex justify-between items-start mt-3'>
            <p>Delivery</p>
            <p>--</p>
          </div>
          <div className='flex justify-between items-start mt-3'>
            <p>Estimated Sales Tax</p>
            <p data-testid='tax'>$0.00</p>
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
              className='inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:shadow-none disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-inset ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50'
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
          <button
            type='button'
            className='flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-3 leading-6 px-6 gap-3 text-white shadow hover:shadow-md active:shadow bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300 w-full h-[48px]'
          >
            Place order and pay
          </button>
          <p className='text-sm text-center mt-4 pb-4 md:pb-0'>
            By placing my order, you agree to our
            <Link
              className='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm text-primary-700 underline hover:text-primary-800 active:text-primary-900 focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600 rounded'
              href='/checkout'
            >
              Terms and Conditions
            </Link>
            and our
            <Link
              className='focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm text-primary-700 underline hover:text-primary-800 active:text-primary-900 focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600 rounded'
              href='/checkout'
            >
              Privacy Policy
            </Link>
          </p>
          <hr className='h-px bg-neutral-200 my-10 md:hidden -mx-4 w-auto' />
        </div>
      </div>
      {/* </div>
      </div>  */}
    </main>
  );
};

export default CheckoutPage;
