/**
 * @author
 */

/*
 * This is an array of all of our images in order.
 */
var images = ["drain_0m.png", "drain_50m.png", "drain_100m.png", "drain_200m.png", "drain_500m.png", "drain_1km.png", "drain_2km.png", "drain_3km.png", "drain_5km.png", "drain_ed.png", "drain_nl.png"];

/*
 * This is console logging our array to make sure that it's there.
 */
console.log(images);

/*
 * Index of the current image in the array.
 */
var index = 0;

/*Assign events to buttons to set navigation.*/
function setNav(){
	console.log("setNav");
	
	$(".button").on("click",function(){
		
		var isNext =$(this).hasClass("next");
		
		if (isNext == true && index !=  (images.length-1)) {
			index = index + 1;
		} else if (isNext == false && index !=  0)  { 	
			index = index - 1; 	
		};
		
		if (index == 0){
			$(".button.prev").addClass("disabled");
		} else if (index == (images.length-1)){
			$(".button.next").addClass("disabled");
		} else {
			$(".button").removeClass("disabled");
		};
		
		updateImage();
	
	});

	$("body").keydown(function(e){
    // left arrow
    if ((e.keyCode || e.which) == 37 && index !=  0)
    {   
        index = index - 1;
         if (index == 0){
			$(".button.prev").addClass("disabled");
		} else if (index == (images.length-1)){
			$(".button.next").addClass("disabled");
		} else {
			$(".button").removeClass("disabled");
        updateImage(); 
       
		};
    }
    // right arrow
    if ((e.keyCode || e.which) == 39 && index !=  (images.length-1))
    {
        index = index + 1;
        if (index == 0){
			$(".button.prev").addClass("disabled");
		} else if (index == (images.length-1)){
			$(".button.next").addClass("disabled");
		} else {
			$(".button").removeClass("disabled");
		};
        updateImage(); 
        
    }   
});


	
}

/*Change the image here. It will provide us with the name of the next image.*/
function updateImage(){
		$(".image-holder").html(
		"<img src='images/"+images[index]+"'/>"
	);
	console.log(image[index]);
}

/*
 * Load the first image into our image holder
 */
$(document).ready(function() {
	$(".image-holder").html(
		"<img src='images/"+images[index]+"'/>"
	);
	
	$(".button.prev").addClass("disabled");
	setNav();
});

