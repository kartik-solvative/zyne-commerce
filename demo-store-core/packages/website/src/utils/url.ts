type ItemWithSlug = {
  /**
   * Absolute URL should start with `/`.
   *
   * @example /item-name/1234
   * */
  slug: string;
};

export const getSearchUrl = (item: ItemWithSlug): string => {
  if (item.slug === "home-and-living") {
    return '';
  } else {
    return `/search/${item.slug}`;
  }
};

export const getProductUrl = (item: ItemWithSlug): string => {
  return `/product/${item.slug}`;
};
