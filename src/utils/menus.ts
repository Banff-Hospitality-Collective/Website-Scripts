export const toggleMenuItemImage = (element: HTMLElement) => {
  const icon = element.querySelector('.camera-icon') as HTMLImageElement;
  const menuImage = element.closest('.menu-item-wrapper')?.querySelector('.food-image');
  menuImage?.classList.toggle('show');
  if (menuImage?.classList.contains('show')) {
    icon.src =
      'https://cdn.prod.website-files.com/672a5835c715ca6f0ce6d7f2/6733aa6f5579c05aed4d3579_camera-off.svg';
  } else {
    console.log('change to open icon');
    icon.src =
      'https://cdn.prod.website-files.com/672a5835c715ca6f0ce6d7f2/6733aa6aa8fb6bdbaa4b38bf_camera.svg';
  }
};
