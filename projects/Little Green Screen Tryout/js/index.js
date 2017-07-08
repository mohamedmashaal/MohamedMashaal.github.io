var fimage = null ;
var bimage = null ;
function UploadfImage(){
var cv = document.getElementById("can");
var seco = document.getElementById("file1");
fimage = new SimpleImage(seco);
fimage.drawTo(cv);
}
function UploadbImage(){
var cv = document.getElementById("can2");
var seco = document.getElementById("file2");
bimage = new SimpleImage(seco);
bimage.drawTo(cv);
}
function Compose(){
if(fimage == null || !fimage.complete())
  alert("Uploadfimage");
if(bimage == null || !bimage.complete())
  alert("Uploadfimage");
var finalimage = new SimpleImage(fimage);
for(var pixel of fimage.values()){
  if(pixel.getGreen() > pixel.getRed()+pixel.getBlue()){
fimage.setPixel(pixel.getX(),pixel.getY(),bimage.getPixel(pixel.getX(),pixel.getY())) 
  }
}
var cv = document.getElementById("can");
Clear();
fimage.drawTo(cv);
}

function Clear(){
var cv = document.getElementById("can");
var cv2 = document.getElementById("can2");
var ctx1 = cv.getContext("2d");
var ctx2 = cv2.getContext("2d");
ctx1.clearRect(0,0,cv.width,cv.height);
ctx2.clearRect(0,0,cv2.width,cv2.height);
}