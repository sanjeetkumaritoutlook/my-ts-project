bundle/compile it into JavaScript that a browser understands.
## 🔹 Option 1: Use a Bundler (Recommended for larger projects)

Use tools like Webpack, Vite, or Parcel to bundle your TypeScript code into a single JavaScript file and include it in an index.html.

Example with Vite:

```
npm install vite typescript
```
Create a vite.config.ts:
```
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
  }
});
```
Create index.html:
```
<!DOCTYPE html>
<html>
  <head>
    <title>TS in Browser</title>
  </head>
  <body>
    <h1>Check Console!</h1>
    <script type="module" src="/src/index.ts"></script>
  </body>
</html>
```

then run: npx vite

Now open http://localhost:5173 and you’ll see your logs in the browser console.

## Option 2: Use tsc + <script> (Simple)

Compile TypeScript into plain JavaScript:
```
npx tsc
```
This creates dist/index.js.

Then create index.html:
```
<!DOCTYPE html>
<html>
  <head>
    <title>TS Demo</title>
  </head>
  <body>
    <h1>Browser Output</h1>
    <script src="./dist/index.js"></script>
  </body>
</html>
```
Open the HTML in your browser → you’ll see console logs in DevTools console.

## 🔹 Option 3: Run with a Dev Server

If you don’t want to configure much, use live-server or http-server:
```
npm install -g live-server
live-server
```
It auto reloads when files change.

⚠️ Important:

Some Node-specific things (like require('@my-scope/hello-package'), logger from winston/pino, etc.) won’t work directly in the browser unless the package supports browser builds.

You might need polyfills or switch to import syntax for browser compatibility.


====

In browser → It prints both to console + webpage.

In Node → It prints only to console (skips DOM since document doesn’t exist).
```
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ES2020",       // ✅ instead of "commonjs" , which works in local for ts-node
    "outDir": "./dist",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true
  }
}
```
dist/index.js runs in the browser as an ES module.
```
npx tsc
```
