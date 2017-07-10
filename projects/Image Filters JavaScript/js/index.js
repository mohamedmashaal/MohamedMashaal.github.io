var image = null ;
var backupimage = null ;
function UploadImage(){
var cv = document.getElementById("can");
var seco = document.getElementById("file");
image = new SimpleImage(seco);
backupimage = new SimpleImage(seco);
image.drawTo(cv);
}
function greyscale(){
  if(image == null || !image.complete())
    alert("Please Upload the Image");
  for(var pixel of image.values()){
    var avr = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avr);
    pixel.setGreen(avr);
    pixel.setBlue(avr);
  }
  var cv = document.getElementById("can");
  image.drawTo(cv);
}

function setR(){
  if(image == null || !image.complete())
    alert("Please Upload the Image");
  for(var pixel of image.values()){
    var avr = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(avr < 128){
      pixel.setRed(2 * avr);
      pixel.setBlue(0);
      pixel.setGreen(0);
    }
    else{
      pixel.setRed(255);
      pixel.setBlue(2 * avr - 255);
      pixel.setGreen(2 * avr - 255);
    }
  }
  var cv = document.getElementById("can");
  image.drawTo(cv);
}
function Window(){
  var cv = document.getElementById("can");
  var w = image.getWidth();
  var h = image.getHeight();
  if(image == null || !image.complete())
    alert("Please Upload the Image");
  for(var pixel of image.values()){
    if(pixel.getX() < 10 || pixel.getY() < 10){
      pixel.setRed(89);
    pixel.setGreen(247);
    pixel.setBlue(247);}
    if(pixel.getX() >= (w-10) || pixel.getY() >= (h-10)){         pixel.setRed(89);
    pixel.setGreen(247);
    pixel.setBlue(247);}
    if(Math.abs(pixel.getY()-h/2) <= 5 || Math.abs(pixel.getX()-w/2) <= 5 ){
      pixel.setRed(89);
    pixel.setGreen(247);
    pixel.setBlue(247);
    }  
      
  }
  image.drawTo(cv);
}
function Rainbow(){
  var cv = document.getElementById("can");
  var w = image.getWidth();
  var h = image.getHeight();
  if(image == null || !image.complete())
    alert("Please Upload the Image");
  for(var pixel of image.values()){
    var avr = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(pixel.getY() <= h/7){
      if(avr < 128){
        pixel.setRed(avr * 2);
        pixel.setGreen(0);
        pixel.setBlue(0);}
      else{
        pixel.setRed(255);
        pixel.setGreen(2*avr-255);
        pixel.setBlue(2*avr-255);
      }
    }
    if(pixel.getY() < 2*h/7 && pixel.getY() > h/7 ){
      if(avr < 128){
        pixel.setRed(avr * 2);
        pixel.setGreen(0.8 *avr);
        pixel.setBlue(0);}
      else{
        pixel.setRed(255);
        pixel.setGreen(1.2*avr-51);
        pixel.setBlue(2*avr-255);
      }
    }
    if(pixel.getY() <= 3*h/7 && pixel.getY() > 2*h/7){
      if(avr < 128){
        pixel.setRed(avr * 2);
        pixel.setGreen(2 *avr);
        pixel.setBlue(0);}
      else{
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2*avr-255);
      }
    }  
        if(pixel.getY() <= 4*h/7 && pixel.getY() > 3*h/7){
      if(avr < 128){
        pixel.setRed(0);
        pixel.setGreen(2 *avr);
        pixel.setBlue(0);}
      else{
        pixel.setRed(2*avr-255);
        pixel.setGreen(255);
        pixel.setBlue(2*avr-255);
      }
    }
    if(pixel.getY() <= 5*h/7 && pixel.getY() > 4*h/7){
      if(avr < 128){
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2 *avr);}
      else{
        pixel.setRed(2*avr-255);
        pixel.setGreen(2*avr-255);
        pixel.setBlue(255);
      }
    }
    if(pixel.getY() <= 6*h/7 && pixel.getY() > 5*h/7){
      if(avr < 128){
        pixel.setRed(.8 *avr);
        pixel.setGreen(0);
        pixel.setBlue(2 *avr);}
      else{
        pixel.setRed(1.2*avr-51);
        pixel.setGreen(2*avr-255);
        pixel.setBlue(255);
      }
    }
    if(pixel.getY() <= h && pixel.getY() > 6*h/7){
      if(avr < 128){
        pixel.setRed(1.6 *avr);
        pixel.setGreen(0);
        pixel.setBlue(1.6 *avr);}
      else{
        pixel.setRed(.4*avr+135);
        pixel.setGreen(2*avr-255);
        pixel.setBlue(.4*avr+135);
      }
    }
  }
  image.drawTo(cv);
}
function Clear(){
var cv = document.getElementById("can");
var ctx1 = cv.getContext("2d");
ctx1.clearRect(0,0,cv.width(),cv.height());
}
function Reset(){
var cv = document.getElementById("can");
var ctx1 = cv.getContext("2d");
ctx1.clearRect(0,0,cv.width(),cv.height());
backupimage.drawTo(cv);
}
