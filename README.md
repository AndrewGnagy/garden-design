# garden-design
Grid-based garden design tool (a la Sim City)

An app that allows you to select plant varieties and "stamp" them on a grid. The results can then be viewed in an isometric projection based on the month of the year and each plants unique growth habits. (March: seedlings, June: flowering, etc.) It also provides detailed information about each plant.

![Isometric Flower](https://raw.githubusercontent.com/AndrewGnagy/garden-design/master/app/img/isometricFlower.png "Isometric Flower")

### Tools
Riot.js
```
npm install riot -g
```
To compile, just point it at the tags folder and it will re-combobulate them into a single js file
```
riot ./tags all-tags.js
```

### Running
To run the app, you'll need to either run the npm server and visit http://localhost:8080 or use Firefox 62+
