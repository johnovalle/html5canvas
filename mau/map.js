function generateMap(height,width){
    var map = [];
    for(var i = 0; i<height; i++){
        map.push([]);
        for(var cols = 0; cols<width; cols++){
            var tile = getTerrain();
            map[i].push(tile);
        }
    }
    return map;
}
var terrain = ['O', 'M', 'S', 'R', 'D', 'L'];
function getTerrain(){
    var terrainType = Math.floor(Math.random()*terrain.length);
    console.log(terrainType);
    return terrain[terrainType];
}

var map = generateMap(10,10);
console.log(map);

//generate blank map
//get array
//while array contains blanks fill in and pop coordinates
//on fill do math to change chance based on surrounding tiles
//and how many tiles of a type have been placed.