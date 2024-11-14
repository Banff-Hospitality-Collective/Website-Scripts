export const GetElement = (attr: string) => {
  return document.querySelector('[' + attr + ']') as HTMLElement | null;
};

export const GetAllElements = (attr: string) => {
  return document.querySelectorAll('[' + attr + ']') as NodeListOf<HTMLElement> | null;
};
