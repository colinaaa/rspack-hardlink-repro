Repro of https://github.com/web-infra-dev/rspack/issues/5912 and https://github.com/webpack/enhanced-resolve/issues/410

Run:

```bash
pnpm --prefix packages/b install
pnpm install
pnpm --filter webpack --filter rspack build
```
