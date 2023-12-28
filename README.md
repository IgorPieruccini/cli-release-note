# CLI Release note 

### Build
 ```
 npm run build
 ```
Your build is automatically set with production mode for best optimization.
A file called `dist` will be create with the bundle.

### Start development server
```
npm run dev
```
Start a server at http://localhost:9000/

### Run eslint manually
```
npm run eslint
```

### Run unit test
```
npm run test
```

### Run unit test with hot reload
```
npm run test:watch
```


## Husky
```
pre-commit: runs > npm run eslint
```# bun-react

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.7. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
