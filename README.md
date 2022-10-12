## Description:
 
This project is used to process images and resize it


## Folder Structure

```bash
├── src
│   ├── routes
│   │   ├── api
│   │   │   │── utilities
│   │   │   │   └── validateData.ts 
│   │   │   │
│   │   │   │── guidance.ts 
│   │   │   └── pictures.ts
│   │   │   
│   │   └── index.ts 
│   │
│   │
│   ├── tests  
│   │   ├── helpers
│   │   │   └── reporter.ts
│   │   │
│   │   ├── indexSpec.ts  
│   │   └── picturesSpec.ts 
│   │
│   │
│   ├── utilities 
│   │   └── logger.ts 
│   │
│   │
│   └── index.ts 
└──
```

## To run this project
Install node.js then downlaod source code 

To run the project:
Type
```
node run start
```
into the terminal
Then Open the browser and click : [http://localhost:3000](http://localhost:3000)

<hr>

to run eslint to check error

```
npm run lint
```

to run eslint and auto fixed error

```
npm run lint:f
```

to compile the TS code

```
npm run build
```

to run the JS code

```
node dist/index.js
```

