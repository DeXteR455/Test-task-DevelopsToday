## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### 1. Clone the repository

```
git clone <your-repo-url>
cd <project-folder>
```

### 2. Install dependencies

```
npm install
```

### 3. (Optional) Set up environment variables

If you want to use a custom base URL for the Playlist App, create a `.env` file in the project root:

```
BASE_URL=<your_URL>
```

By default, tests use the public demo URL.

### 4. Lint and format the code

To check code style and formatting:

```
npm run lint
npm run format
```

### 5. Run the tests

To run all Playwright tests:

```
npm test
```

To see a detailed HTML report after running tests:

```
npx playwright show-report
```

## Project Structure

- `tests/` — test files
- `src/pages/` — page objects (reusable test logic)
- `playwright.config.ts` — Playwright configuration

## .gitignore

The `.gitignore` file excludes:
- `node_modules/` (dependencies)
- Playwright reports and cache
- screenshots and test results