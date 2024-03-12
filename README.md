Repro of https://github.com/web-infra-dev/rspack/issues/5912 and https://github.com/webpack/enhanced-resolve/issues/410

Run:

```bash
pnpm install
pnpm --prefix packages/b
pnpm --filter webpack --filter rspack build
```