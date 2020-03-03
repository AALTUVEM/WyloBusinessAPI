# WyloBusinessAPI<br/>
WyloBusinessAPI

# Modulos usados:<br/>
express <br/>
sequelizejs<br/>
morgan<br/>
babel/core<br/>
babel/cli<br/>
babel/preset-env<br/>
babel/polyfill<br/>
mysql2<br/>
nodemon<br/>

# Cambios package.json<br/>
 "name": "wylodatabase",<br/>
  "version": "1.0.0",<br/>
  "description": "Wylo Database",<br/>
  "main": "index.js",<br/>
  
  Scripts agregados
  /<br/><br/>
  "scripts": {<br/>
    "dev": "nodemon src/index.js --exec babel-node",<br/>
    "build": "babel src --out-dir dist",<br/>
    "start": "node dist/index.js"<br/>
  }

# Estructura del proyecto<br/>

>wylodatabase<br/>
>> dist<br/>
>> node_modules<br/>
>> src <---- Lo que esta en github<br/>
>.babelrc<br/>
>package-lock.json<br/>
>package.json<br/>
