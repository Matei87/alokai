'use client';
import { SfButton, SfIconAdd, SfIconRemove } from '@storefront-ui/react';
import { useId } from 'react';
import { useCounter } from 'react-use';
import { clamp } from '@storefront-ui/shared';

const QuantitySelector = ({ quantity }) => {
  const inputId = useId();
  const min = 1;
  const max = 200;
  const [value, { inc, dec, set }] = useCounter(min);
  let currValue = quantity;

  function handleOnChange(event) {
    const { value: currentValue } = event.target;
    const nextValue = parseFloat(currentValue);
    set(clamp(nextValue, min, max));
  }

  return (
    <div className='inline-flex flex-col items-center'>
      <div className='flex border border-neutral-300 rounded-md'>
        <SfButton
          variant='tertiary'
          square
          className='rounded-r-none'
          disabled={value <= min}
          aria-controls={inputId}
          aria-label='Decrease value'
          onClick={() => {
            dec();
            console.log(currValue--);
          }}
        >
          <SfIconRemove />
        </SfButton>
        <input
          id={inputId}
          type='number'
          role='spinbutton'
          className='appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm'
          min={min}
          max={max}
          value={quantity}
          onChange={handleOnChange}
        />
        <SfButton
          variant='tertiary'
          square
          className='rounded-l-none'
          disabled={value >= max}
          aria-controls={inputId}
          aria-label='Increase value'
          onClick={() => {
            inc();
            console.log(currValue++);
          }}
        >
          <SfIconAdd />
        </SfButton>
      </div>
    </div>
  );
};

export default QuantitySelector;
