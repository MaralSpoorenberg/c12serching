var marks = [35,38,42,45,43,34,46,41,48,32];
function findnumber(a,x) {
  for (let i = 0; i < a.length; i++) {
    if (a[i]===x) {
      return i
    }
    
  }
  return -1
}

function setup() 
{
  createCanvas(400,400);
var result=findnumber(marks,34)
if (result===-1) {
  console.log("number not found")
} else {
console.log("number found at index ",result)  
}
}

function draw() 
{
  background(30);
}

 

