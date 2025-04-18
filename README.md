## You can add more .ts files and explore different TypeScript concepts like:

Interfaces

Generics

Enums

Type Guards

Decorators

## Run TypeScript Directly with ts-node in Local

ts-node src/index.ts

## Compile TypeScript to JavaScript (optional)

npx tsc

node dist/index.js

## Install TypeScript
npm install --save-dev typescript

## Create a tsconfig.json File
npx tsc –init

## Compile the TypeScript files (together) -> another way

tsc src/index.ts src/types/personUtils.ts

## Run the compiled JavaScript:
node index.js

## to connect to private registry
first set registry

npm config set registry https://sanjeet-registry-612233812744.d.codeartifact.ap-south-1.amazonaws.com/npm/my-private-npm/

(or)

aws codeartifact login --tool npm --repository my-private-npm --domain sanjeet-registry --domain-owner 612233812744

npm update @my-scope/hello-package

switch to public registry:

npm set registry https://registry.npmjs.org/


## How can we run TS code:
1)compile to JS-> node, browser : tsc filename.ts

2)directly with ts-node

3)Bundle with a Bundling tool (webpack,parcel) and run in browser

