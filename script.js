var images = ["me.PNG", "cool.PNG", "unhappy.PNG"]
var imageIndex = 0;

ssLeft()
ssRight()

function ssLeft(){
    imageIndex += 1;
    indexCorrection();
}

function ssRight(){
    imageIndex -= 1;
    indexCorrection()
}

function indexCorrection(){
    if (imageIndex > images.length - 1){
        imageIndex = 0;
    }
    if(imageIndex < 0){
        imageIndex = images.length - 1;
    }
    
    document.getElementById("slideshowMe").src = "images/" + images[imageIndex];
}