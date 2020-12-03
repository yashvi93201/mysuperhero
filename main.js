var canvas=new fabric.Canvas('myCanvas');
var block_image_width=30;
var block_image_height=30;
var player_x=10;
 var player_y=10;
 player_object="";
function player_update(){
    fabric.Image.fromURL("avenger_bg.jpg",function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,left:player_x
    });
    canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img) {
 block_image_object=Img;
 block_image_object.scaleToWidth(block_image_width);
 block_image_object.scaleToHeight(block_image_height);
 block_image_object.set({
     top:player_y,left:player_x
 });
 canvas.add(block_image_object);
    
    });
    
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
keypressed=e.keyCode;
if(e.shiftKey==true&&keypressed=='77'){
    console.log("m and shift pressed toghter.");
    block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}
if(e.shiftKey==true&&keypressed=='80'){
    console.log("m and shift pressed toghter.");
    block_image_width=block_image_width+10;
    block_image_height=block_image_height+10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}
if(keypressed=='38'){
up();
console.log ("up");
}
if(keypressed=='40'){
    down();
    console.log("down");
}
if(keypressed=='37'){
    left();
    console.log("left");
}
if(keypressed=='39'){
right();
console.log("right");
}
if(keypressed=='70'){
    new_image('hulk_face.png');
    console.log("f");
}
if(keypressed=='76'){
    new_image('ironman_legs.png');
    console.log("l");
}
if(keypressed=='66'){
    new_image('spiderman_body.png');
    console.log("b");
}
if(keypressed=='71'){
    new_image('spiderman_right.png');
    console.log("g");
}

}

function up(){
    if(player_y>=0){
        player_y=player_y-block_image_height;
         canvas.remove(player_object);
         player_update();
    }
}
function down(){
    if(player_y<=500){
 player_y=player_y+block_image_height;
 canvas.remove(player_object);
 player_update();
    }
        
}
function left(){
    if(player_x>0){
        player_x=player_x-block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x<=850){
        player_x=player_x+block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}