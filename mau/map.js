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

function getTerrain() {
    var terrainType = Math.floor(Math.random()*terrain.length);
    return terrain[terrainType];
}

function fillMap() {
    while (blank_sectors.length > 0){
       var random_index = Math.floor(Math.random()*blank_sectors.length);
       var selected_sector = blank_sectors[random_index];
       blank_sectors.splice(random_index,1);
       var selection = {row: selected_sector[0], col: selected_sector[1]};
       console.log(getSurrounding(selection, map));
       //console.log(selection);
       map[selection.row][selection.col] = getTerrain();
       //console.log(map);
    }
}

function getSurrounding(sector, map) {
    console.log(sector);
  if (sector.row === 0) {
    if(sector.col === 0) {
      return [map[sector.row][sector.col+1],
              map[sector.row+1][sector.col], map[sector.row+1][sector.col+1] 
              ];
    }
    else if (sector.col === (map[0].length-1)) {
      return [map[sector.row][sector.col-1],
              map[sector.row+1][sector.col-1], map[sector.row+1][sector.col]
              ];
    }
    else {
      return [map[sector.row][sector.col-1], map[sector.row][sector.col+1],
              map[sector.row+1][sector.col-1], map[sector.row+1][sector.col], map[sector.row+1][sector.col+1] 
              ];
    }
  }
  else if (sector.row === (map.length-1)) {
    if(sector.col === 0) {
      return [map[sector.row-1][sector.col], map[sector.row-1][sector.col+1], 
              map[sector.row][sector.col+1]
              ];
    }
    else if (sector.col === (map[0].length-1)) {
      return [map[sector.row-1][sector.col-1], map[sector.row-1][sector.col], 
              map[sector.row][sector.col-1] 
              ];
    }
    else {
      return [map[sector.row-1][sector.col-1], map[sector.row-1][sector.col], map[sector.row-1][sector.col+1], 
              map[sector.row][sector.col-1], map[sector.row][sector.col+1]
              ];
    }
  }
  else {
    if(sector.col === 0) {
      return [map[sector.row-1][sector.col], map[sector.row-1][sector.col+1], 
              map[sector.row][sector.col+1],
              map[sector.row+1][sector.col], map[sector.row+1][sector.col+1] 
              ];
    }
    else if (sector.col === (map[0].length-1)) {
      return [map[sector.row-1][sector.col-1], map[sector.row-1][sector.col], 
              map[sector.row][sector.col-1],
              map[sector.row+1][sector.col-1], map[sector.row+1][sector.col] 
              ];
    }
    else {
      return [map[sector.row-1][sector.col-1], map[sector.row-1][sector.col], map[sector.row-1][sector.col+1], 
              map[sector.row][sector.col-1], map[sector.row][sector.col+1],
              map[sector.row+1][sector.col-1], map[sector.row+1][sector.col], map[sector.row+1][sector.col+1] 
              ];
    }
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