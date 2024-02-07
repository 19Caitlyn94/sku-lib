import type { SkuConfig } from 'sku';

const skuConfig: SkuConfig = {
  // clientEntry: 'src/client.tsx',
  renderEntry: 'src/render.tsx',
  libraryEntry: 'src/library.tsx',
  libraryName: 'sku-lib',
  // environments: ['development', 'production'],
  // publicPath: '/path/to/public/assets/', // <-- Required for sku build output
  // orderImports: true,
};

export default skuConfig;
