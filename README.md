# Express Microservice Skeleton

This repository contains a minimal microservice structure that anyone can adopt.
If you want to build a microservice using Object-Oriented principles with TypeScript, this skeleton is a perfect fit

## Packages Installed

1. Express (Latest)
2. Routing Controllers
3. Winston

### Minimum Requirement

1. Node JS >= 20
2. Typescript Compiler (Installed globally or locally)

### How to Configure

1. Clone the repository.
2. Install dependencies
3. Start the developement Server

```
npm install 
#or
yarn install
#then

npm run dev
#or
yarn run dev

```

### How to Build

```
npm run build
#or
yarn run build
```

Once built, the compiled files will be emitted to the /dist directory.


### RSA PUBLIC AND PRIVATE KEY COMMANDS FOR SIGNING THE JWT

openssl genpkey -algorithm RSA -out ./auth_keys/private_key.pem -pkeyopt rsa_keygen_bits:4096
openssl rsa -in ./auth_keys/private_key.pem -pubout -out ./auth_keys/public_key.pem

### Type ORM Migration Creation

```
npx typeorm migration:create ./src/migrations/MigrationFileName
```

### Type ORM Migrate Table

```
yarn run migrate
```

### Docker Support

The project root contains a Dockerfile for image building. Use it as needed.