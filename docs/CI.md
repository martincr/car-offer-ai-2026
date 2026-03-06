# Continuous Integration

This project uses GitHub Actions for CI. The main workflow is defined in
`.github/workflows/ci.yml` and runs on every push or pull request to `main`/
`master`.

## Workflow steps

1. **Checkout & Node setup** – pulls code and installs Node.js 20.
2. **Install dependencies** – runs `npm ci` for a clean install.
3. **Linting** – executes `npm run lint` using ESLint.
4. **Type checking** – runs `npm run typecheck` to catch TypeScript errors.
5. **Build** – compiles the Next.js app with `npm run build`.
6. **E2E tests** – starts a temporary dev server and runs `npm run test:e2e`.
7. **Performance audit** – runs Lighthouse against the local server and logs the
   performance score.

The dev server is started as a service container to make it available during the
E2E and Lighthouse steps.

## Results

- Lint/errors prevent merges and notify maintainers.
- Build failures stop the pipeline early.
- Playwright ensures basic user flows are working.
- Lighthouse score provides a quick indicator of frontend performance.

## Future improvements

- **Cache dependencies** between runs to speed up installs (`actions/cache`).
- **Split jobs** for lint/typecheck/build to run in parallel and save time.
- **Add unit tests** (Jest) and include coverage reports that fail on low coverage.
- **Security scans** using tools like `npm audit` or third-party actions.
- **Deployment job** to staging/production when a release tag is pushed.
- **Performance budgets** or thresholds that fail the build if score drops.
- **Artifact storage** for test results and Lighthouse reports, or integrate with
  Slack/email notifications.
- **Static analysis** such as BundlePhobia for size regression or Snyk for
  vulnerability management.

This document serves as a reference and can be updated as the pipeline evolves.