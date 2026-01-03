/* Asset module declarations for TypeScript */
declare module "*.png" {
  const src: string;
  export default src;
}
declare module "*.jpg" {
  const src: string;
  export default src;
}
declare module "*.jpeg" {
  const src: string;
  export default src;
}
declare module "*.svg" {
  const src: string;
  export default src;
}

// If library types can't be resolved correctly, fall back to any for now
declare module "@splidejs/react-splide" {
  export const Splide: any;
  export const SplideSlide: any;
  const _default: any;
  export default _default;
}

// Allow importing JSON modules (already enabled via tsconfig resolveJsonModule)
declare module "*.json" {
  const value: any;
  export default value;
}
