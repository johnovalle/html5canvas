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
       
       //console.log(getSurrounding(map[selected_sector[0]][selected_sector[1]], map));
       console.log(selected_sector);
       map[selected_sector[0]][selected_sector[1]] = getTerrain();
    }
}

function getSurrounding(sector, map) {
  if (sector[0] === 0) {
    if(sector[1] === 0) {
      return [map[sector[0][sector[1]+1]],
              map[sector[0]+1][sector[1]], map[sector[0]+1][sector[1]+1] 
              ];
    }
    else if (sector[1] === map[0].length) {
      return [map[sector[0][sector[1]-1]],
              map[sector[0]+1][sector[1]-1], map[sector[0]+1][sector[1]]
              ];
    }
    else {
      return [map[sector[0][sector[1]-1]], map[sector[0][sector[1]+1]],
              map[sector[0]+1][sector[1]-1], map[sector[0]+1][sector[1]], map[sector[0]+1][sector[1]+1] 
              ];
    }
  }
  else if (sector[0] === map.length) {
    if(sector[1] === 0) {
      return [map[sector[0]-1][sector[1]], map[sector[0]-1][sector[1]+1], 
              map[sector[0][sector[1]+1]]
              ];
    }
    else if (sector[1] === map[0].length) {
      return [map[sector[0]-1][sector[1]-1], map[sector[0]-1][sector[1]], 
              map[sector[0][sector[1]-1]] 
              ];
    }
    else {
      return [map[sector[0]-1][sector[1]-1], map[sector[0]-1][sector[1]], map[sector[0]-1][sector[1]+1], 
              map[sector[0][sector[1]-1]], map[sector[0][sector[1]+1]]
              ];
    }
  }
  else {
    if(sector[1] === 0) {
      return [map[sector[0]-1][sector[1]], map[sector[0]-1][sector[1]+1], 
              map[sector[0][sector[1]+1]],
              map[sector[0]+1][sector[1]], map[sector[0]+1][sector[1]+1] 
              ];
    }
    else if (sector[1] === map[0].length) {
      return [map[sector[0]-1][sector[1]-1], map[sector[0]-1][sector[1]], 
              map[sector[0][sector[1]-1]],
              map[sector[0]+1][sector[1]-1], map[sector[0]+1][sector[1]] 
              ];
    }
    else {
      return [map[sector[0]-1][sector[1]-1], map[sector[0]-1][sector[1]], map[sector[0]-1][sector[1]+1], 
              map[sector[0][sector[1]-1]], map[sector[0][sector[1]+1]],
              map[sector[0]+1][sector[1]-1], map[sector[0]+1][sector[1]], map[sector[0]+1][sector[1]+1] 
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