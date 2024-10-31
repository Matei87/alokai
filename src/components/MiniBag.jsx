import { useId, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { selectCart } from '../store/selectors.js';
import { useAppSelector } from '../store/hooks.js';
import { removeProductFromCart } from '../store/slice.js';
import QuantitySelector from './QuantitySelector';
import Image from 'next/image';
import Link from 'next/link.js';
import { SfModal, SfButton, SfIconClose } from '@storefront-ui/react';

const MiniBag = ({ isOpen, close }) => {
  const cart = useAppSelector(selectCart);
  const headingId = useId();
  const descriptionId = useId();
  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  const totalItemsPrice = cart
    .map((item) => item.quantity * item.price)
    .reduce((prev, curr) => prev + curr, 0)
    .toFixed(2);

  return (
    <div>
      {/* Backdrop */}
      <CSSTransition
        in={isOpen}
        nodeRef={backdropRef}
        timeout={200}
        unmountOnExit
        classNames={{
          enter: 'opacity-0',
          enterDone: 'opacity-100 transition duration-200 ease-out',
          exitActive: 'opacity-0 transition duration-200 ease-out',
        }}
      >
        <div
          ref={backdropRef}
          className='fixed inset-0 bg-neutral-700 bg-opacity-50'
        />
      </CSSTransition>

      {/* Modal */}
      <CSSTransition
        in={isOpen}
        nodeRef={modalRef}
        timeout={200}
        unmountOnExit
        classNames={{
          enter: 'translate-y-10 opacity-0',
          enterDone:
            'translate-y-0 opacity-100 transition duration-200 ease-out',
          exitActive:
            'translate-y-10 opacity-0 transition duration-200 ease-out',
        }}
      >
        <SfModal
          open
          onClose={close}
          ref={modalRef}
          as='section'
          role='alertdialog'
          aria-labelledby={headingId}
          aria-describedby={descriptionId}
          className='max-w-[90%] md:max-w-lg flex flex-col top-0 right-0'
          id='minibag'
        >
          <header className='flex justify-center items-center'>
            <h3
              id={headingId}
              className='font-bold text-center uppercase border-bottom'
            >
              Shopping Bag ({cart.length})
            </h3>
            <SfButton
              square
              variant='tertiary'
              className='absolute right-2'
              onClick={close}
            >
              <SfIconClose />
            </SfButton>
          </header>
          <div className='mx-auto my-8 flex justify-center overflow-y-auto'>
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
          </div>
          <footer className='flex flex-col gap-4 mt-auto'>
            <div className='flex justify-between w-full'>
              <div className='flex flex-col'>
                <p className='font-semibold margin-0'>SUBTOTAL</p>
                <p className='margin-0'>Includes VAT</p>
              </div>
              <span className='font-semibold'>${totalItemsPrice}</span>
            </div>
            <Link
              href={'/shoppingbag'}
              className='bg-black uppercase p-2 text-center text-white'
            >
              Continue to Shopping Bag
            </Link>
            <span className='uppercase my-1 text-sm'>
              you can also checkout with:
            </span>
            <button className='bg-yellow-400 p-2 flex justify-center items-center'>
              <Image src='./payPal.svg' width={50} height={21} alt='paypal' />
            </button>
            <button className='bg-black p-2 flex justify-center items-center'>
              <Image src='./applePay.svg' width={48} height={21} alt='apple' />
            </button>
          </footer>
        </SfModal>
      </CSSTransition>
    </div>
  );
};

export default MiniBag;
