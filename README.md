```bash

#1. prerequisites & dev environment

nvm install lts/hydrogen
nvm alias default lts/hydrogen
nvm use lts/hydrogen

# install pnpm and rush globally if you dont have them
npm i -g pnpm@9.12.0 @microsoft/rush@5.14.0


#2. install project dependencies
rush update

# NB: every time you add a new package, or open trying to run from dev ide 
# ensure you are using the right node version + rush update 
nvm use lts/hydrogen
rush update

#3. build the project
rush build


#4. run docs or demo
rush dev:docs 
rush dev:demo-fixed-layout
rush dev:demo-free-layout

```
