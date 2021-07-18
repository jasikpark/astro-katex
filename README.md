# astro-katex

This is intended to be an easy to use way to add a KaTeX component to your Astro site!

If you want a consistent config across your site, you can define:

```js
// ./katex-config.js

/** @type import('@types/katex').KaTeXOptions */
export const opts = {
  displayMode: false,
  strict: false,
};
```

and then import that default config where you import the component:

```tsx
---
// ./src/page/index.astro
import { KaTeX } from "astro-katex";
import { opts } from "../../katex-config.js";
---

<KaTeX {opts}>
y = mx + b
</KaTeX>
```
