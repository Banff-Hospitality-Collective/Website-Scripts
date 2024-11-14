/* CORE */
export const documentEl: Document = document;

/*
  MENU
*/
export const menuAnchorLinks = documentEl.querySelector(
  '[menu-button="jump-link-name"]'
) as HTMLLinkElement;

export const floatingNavEl = {
  anchorLinksButton: menuAnchorLinks,
};

export const menuFilterFields = documentEl.querySelectorAll('[fs-cmsfilter-field]') as NodeList;

export const MenuFilters = {
  fields: menuFilterFields,
};
