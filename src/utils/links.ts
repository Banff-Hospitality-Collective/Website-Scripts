export const ScrollToAnchor = (el: HTMLElement, scrollToId: string) => {
  el.addEventListener('click', (e: MouseEvent): void => {
    e.preventDefault();
    const id = el.getAttribute(scrollToId) as string;
    document?.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  });
};
