import { createPopper } from '@popperjs/core';
import './styles.css';

const popcorn = document.querySelector('#popcorn');
const tooltip = document.querySelector('#tooltip');

const popperInstance = createPopper(popcorn, tooltip, {
  placement: 'right',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 8],
      },
    },
  ],
});

document.querySelector('#container').scrollTop = 520;

function show() {
  tooltip.setAttribute('data-show', '');

  // We need to tell Popper to update the tooltip position
  // after we show the tooltip, otherwise it will be incorrect
  popperInstance.update();
}

function hide() {
  tooltip.removeAttribute('data-show');
}

const showEvents = ['mouseenter', 'focus'];
const hideEvents = ['mouseleave', 'blur'];

showEvents.forEach((event) => {
  popcorn.addEventListener(event, show);
});

hideEvents.forEach((event) => {
  popcorn.addEventListener(event, hide);
});
