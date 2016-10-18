Once references & module/ export the to do files

in index.html
add tag script src="build/js/app.js"

- compile all the files; to-do-files
then
- compile
```
tsc --out build/js/app.js app/to-do-create-tasks.ts app/to-do-interfaces.ts app/to-do-people.ts

- It means, "Hey TypeScript Compiler, create a file called app.js inside of build/js, and fill it with the compiled versions of the following files." In your own projects,

***SHORTEN VERSION FOR ALL FILES
- If you want to shorten this command to include all the files in your app directory, then you can use this command:

tsc --out build/js/app.js app/*.ts

```
### we can also save ourselves some work by creating that tsconfig.json file that Atom is looking for in the top level of our project directory. Here's what should be in it.

```
tsconfig.json
____________________________
{
  "compileOnSave": true,
  "compilerOptions": {
    "rootDir": "app",
    "out": "build/js/app.js"
  },
  "files": [
    "app/to-do-create-tasks.ts",
    "app/to-do-classes-interfaces.ts",
    "app/to-do-listing-function.ts",
    "app/to-do-people.ts"
    ]
}

```
- These are instructions for the TypeScript compiler. We tell it that our development files all live in the folder app by using the rootDir field. We tell it to concatenate all of our compiled code into a file called app.js in the build/js folder by using the out field. We tell it to compile on save because we don't want to have to rerun the compile command manually every time we change any of our TypeScript files. And then, we list the files that we want the compiler to compile.

- If we leave the files array out of the configuration file, it will default to compiling all the .ts files in our rootDir. In our case, this is not what we want because we still have some leftover greetings.ts and sum.ts files that we don't want to compile with our little to-do list.

- Now, all we need to do is run the following command from the top level of our project directory (the same place as the tsconfig.json file):

```
tsc -w

```
- The -w stands for watch, just like the gulp.watch method we are used to. Now, we can happily work away in our TypeScript files with the compiler running in the background warning us of any errors and recompiling whenever we save a file. We will have to reload the browser by hand though.
