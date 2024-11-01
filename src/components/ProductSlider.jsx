import {
  SfCounter,
  SfRating,
  SfButton,
  SfIconChevronLeft,
  SfIconChevronRight,
  SfScrollable,
} from '@storefront-ui/react';
import Image from 'next/image';
import Link from 'next/link';

function ButtonPrev({ disabled = false, ...attributes }) {
  return (
    <SfButton
      className={'absolute !rounded-full z-10 left-4 bg-white hidden md:block'}
      variant='secondary'
      size='lg'
      square
      {...attributes}
    >
      <SfIconChevronLeft />
    </SfButton>
  );
}

function ButtonNext({ disabled = false, ...attributes }) {
  return (
    <SfButton
      className={'absolute !rounded-full z-10 right-4 bg-white hidden md:block'}
      variant='secondary'
      size='lg'
      square
      {...attributes}
    >
      <SfIconChevronRight />
    </SfButton>
  );
}

const ProductSlider = ({ products }) => {
  return (
    <SfScrollable
      className='m-auto py-4 items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'
      buttons-placement='floating'
      drag
      slotPreviousButton={<ButtonPrev />}
      slotNextButton={<ButtonNext />}
    >
      {products.map(({ id, image, price, title, rating }) => (
        <div
          key={id}
          className='first:ms-auto last:me-auto ring-1 ring-inset ring-neutral-200 shrink-0 rounded-md hover:shadow-lg w-[148px] h-[290px] lg:w-[192px]'
        >
          <div className='p-2'>
            <Link href={`/product/${id}`} className='block'>
              <Image
                src={image}
                alt={title}
                className='block object-contain rounded-md aspect-square lg:w-[190px] lg:h-[190px]'
                width='146'
                height='146'
              />
            </Link>
          </div>

          <div className='flex flex-col gap-1 p-2 border-t border-neutral-200'>
            <span>{title.slice(0, 20)}</span>
            <div className='flex items-center'>
              <SfRating size='xs' value={rating?.rate} max={5} />
              <SfCounter size='xs'>{rating?.count}</SfCounter>
            </div>
            <span className='block font-bold'>${price}</span>
          </div>
        </div>
      ))}
    </SfScrollable>
  );
};

export default ProductSlider;
