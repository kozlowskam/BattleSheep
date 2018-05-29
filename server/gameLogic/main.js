const boardsize = 10

function createEmptyBoard() {
    var board = {}  
    for (i=0; i< boardsize; i++) {
        for (j=0; j<boardsize; j++) {
            var temp = [i,j]
            board[ temp ] = {
                'occupied': false,
                'discovered': false
            }   
        }
    }
    return board
}

var board1 = createEmptyBoard() 
console.log(board1)


const sheepShapes = {
    'blackSheep' : [[0,0]],
    '2Sheep' : [[0,0], [0,1]],
    '3Sheep' : [[0,0], [0,1], [0,2]],
    'zSheep' : [[0,0], [0,1], [1,1], [1,2]],
    '4sheep' : [[0,0], [0,1], [0,2], [0,3]],
    'lSheep' : [[0,0], [0,1], [1,1]],
    'bigZsheep' : [[0,0], [1,0], [1,1], [1,2], [2,2]],
    'fatSheep' : [[0,0], [0,1], [1,0], [1,1]]
} 

function placeSheep(startSquare) {
}