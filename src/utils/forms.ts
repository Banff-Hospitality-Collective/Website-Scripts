export const isChecked = (el: Event): boolean => {
  const isChecked: boolean = (el.target as HTMLInputElement).checked;
  return isChecked;
};
