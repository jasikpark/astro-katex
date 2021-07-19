// `lazy` is a wrapper that creates async Astro components
const lazy = (_import) => {
  return {
    isAstroComponent: true,
    __render: async (...args) =>
      _import().then(({ default: Component }) => {
        return Component.__render(...args);
      }),
  };
};

// We use `lazy` to avoid the Astro Snowpack plugin from eagerly evaluating these components
// because `__renderPage` is stateful and will inject any linked styles to `state`
// for any consumers using `import { SingleComponent } from 'astro/component'`
export const KaTeX = lazy(() => import("./KaTeX.astro"));
export const KaTeXInline = lazy(() => import("./KaTeXInline.astro"));
export const $ = lazy(() => import("./KaTeXInline.astro"));
export const KaTeXBlock = lazy(() => import("./KaTeXBlock.astro"));
export const $$ = lazy(() => import("./KaTeXBlock.astro"));
