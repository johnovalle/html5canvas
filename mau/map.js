function generateMap(height,width){
    var map = [];
    for(var row = 0; row<height; row++){
        map.push([]);
        for(var col = 0; col<width; col++){
            blank_sectors.push([row,col]);
            map[row].push("BLANK");
        }
    }
    return map;
}

var blank_sectors = [];
var terrain = ['O', 'M', 'S', 'R', 'D', 'L'];

function getTerrain(){
    var terrainType = Math.floor(Math.random()*terrain.length);
    return terrain[terrainType];
}

function fillMap(){
    while (blank_sectors.length > 0){
       var random_index = Math.floor(Math.random()*blank_sectors.length);
       var selected_sector = blank_sectors[random_index];
       blank_sectors.splice(random_index,1);
       map[selected_sector[0]][selected_sector[1]] = getTerrain();
    }
}

var map = generateMap(10,10);
fillMap();
console.log(map);
//generate blank map
//get array
//while array contains blanks fill in and pop coordinates
//on fill do math to change chance based on surrounding tiles
//and how many tiles of a type have been placed.