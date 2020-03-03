# WyloBusinessAPI
WyloBusinessAPI

# Modulos usados:
express <br/>
sequelizejs
morgan
babel/core
babel/cli
babel/preset-env
babel/polyfill
mysql2
nodemon

#Cambios package.json
 "name": "wylodatabase",
  "version": "1.0.0",
  "description": "Wylo Database",
  "main": "index.js",
  
  /** Scripts agregados **/
  "scripts": {
    "dev": "nodemon src/index.js --exec babel-node",
    "build": "babel src --out-dir dist",
    "start": "node dist/index.js"
  }
