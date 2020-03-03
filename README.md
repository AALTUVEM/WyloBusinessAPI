# WyloBusinessAPI
WyloBusinessAPI

# Modulos usados:
express <br/>
sequelizejs<br/>
morgan<br/>
babel/core<br/>
babel/cli<br/>
babel/preset-env<br/>
babel/polyfill<br/>
mysql2<br/>
nodemon<br/>

#Cambios package.json
 "name": "wylodatabase",<br/>
  "version": "1.0.0",<br/>
  "description": "Wylo Database",<br/>
  "main": "index.js",<br/>
  
  /** Scripts agregados **
  /<br/><br/>
  "scripts": {<br/>
    "dev": "nodemon src/index.js --exec babel-node",<br/>
    "build": "babel src --out-dir dist",<br/>
    "start": "node dist/index.js"<br/>
  }
