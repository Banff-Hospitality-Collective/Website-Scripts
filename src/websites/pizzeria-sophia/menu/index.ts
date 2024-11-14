import Splide from '@splidejs/splide';

import { documentEl, floatingNavEl } from '$pizzeriaSophia/elements';
import { GetAllElements, GetElement } from '$utils/common';
import { isChecked } from '$utils/forms';
import { ScrollToAnchor } from '$utils/links';
import { toggleMenuItemImage } from '$utils/menus';
import { isVisable } from '$utils/viewport';

declare const window: any; // eslint-disable-line @typescript-eslint/no-explicit-any

window.Webflow ||= [];
window.Webflow.push(() => {
  /* MENU ELEMENTS */
  //const menuEl = documentEl.querySelectorAll('[menu-name]');

  /* SLIDER ELEMENTS */
  const sliderMenuImages = documentEl.querySelectorAll<HTMLDivElement>('[slider="menu-images"]');
  const sliderMenuItems = documentEl.querySelectorAll<HTMLDivElement>('[slider="menus"]');

  sliderMenuImages.forEach((item) => {
    const slider = new Splide(item, {
      type: 'loop',
      perPage: 3.5,
      perMove: 1,
      gap: 24,
      breakpoints: {
        640: {
          perPage: 1.5,
          gap: 12,
        },
      },
    });
    slider.mount();
  });

  sliderMenuItems.forEach((item) => {
    const slider = new Splide(item, {
      perPage: 5,
      perMove: 1,
      arrows: false,
      drag: false,
      gap: 64,
      width: '100%',
      breakpoints: {
        640: {
          type: 'loop',
          arrows: false,
          drag: true,
          perPage: 2.5,
          gap: 6,
        },
        768: {
          type: 'loop',
          arrows: false,
          drag: true,
          perPage: 3,
        },
        992: {
          type: 'loop',
          arrows: false,
          drag: true,
          perPage: 4,
        },
      },
    });
    slider.mount();
  });

  document.onscroll = () => {
    const floatingNavbarAttr = 'menu-name' as string;
    GetAllElements(floatingNavbarAttr)?.forEach((element) => {
      if (isVisable(element)) {
        floatingNavEl.anchorLinksButton.innerHTML = <string>element.getAttribute('menu-name');
      }
    });
  };

  /*
   *
   * ANCHOR SCROLL
   * Smooth scroll to an element
   * Add the data attribute [data-scroll="ELEMENT ID"] to a link element
   *
   * */
  const scrollToElementAttr = 'data-scroll' as string;
  GetAllElements(scrollToElementAttr)?.forEach((item: HTMLElement): void =>
    ScrollToAnchor(item, 'data-scroll')
  );

  /*
   *
   * FILTER COUNTER
   * Add or subtract the total number of active filters
   * Go to the filterCountSpanAttr const in the elements.ts file for the data attribute
   *
   * */
  let totalActiveFilters: number = 0;
  const filterCountSpanAttr = 'filters-checked' as string;
  const filterCountSpan = GetElement(filterCountSpanAttr);

  GetAllElements('fs-cmsfilter-field')?.forEach((field: Node): void => {
    field.addEventListener('change', (e: Event): void => {
      if (isChecked(e)) {
        totalActiveFilters += 1;
      } else {
        totalActiveFilters -= 1;
      }
      filterCountSpan!.innerText = totalActiveFilters.toString();
    });
  });

  /*
   *
   * MENU ITEM - SHOW IMAGE
   *
   * */
  //const menuItemImageOpenAttr = 'data-menu-image="trigger"' as string;
  window.onload = function () {
    const menuItemImageOpenAttr = 'menu-item-trigger' as string;
    GetAllElements(menuItemImageOpenAttr)?.forEach((element: HTMLElement): void => {
      if (
        element?.closest('.image-trigger')?.querySelector('.auto-open-trigger')?.innerHTML ===
        'true'
      ) {
        toggleMenuItemImage(element);
      }

      element?.addEventListener('click', (): void => toggleMenuItemImage(element));
    });
  };

  window.fsAttributes = window.fsAttributes || [];
  window.fsAttributes.push([
    'cmsnest',
    (listInstances: never): void => {
      window.fsAttributes.cmsfilter.init();
      console.log('done!', listInstances);
    },
  ]);
});
