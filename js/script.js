

var my_arr = [{
    name: "Chris John",
    avatar: "link",
    screct_name: ""
  },
  {
    name: "Martin Sadien",
    avatar: "link",
    screct_name: ""
  },
  {
    name: "Pounam Mungroo",
    avatar: "link",
    "screct name": ""
  },
  {
    name: "Anash Pilon",
    avatar: "link",
    screct_name: ""
  },
  {
    name: "Jo Dalton",
    avatar: "link",
    screct_name: ""
  }
];
let user = 0;
var used_arr = [];


 

$(document).ready(function () {
  $("#rest").attr("disabled", "disabled");
  $("#next").hide();
  add_user(); 
});

 let add_user = () => {


  let character_name = my_arr[user].name ;

  let character_element = document.querySelector("#character_name"); 
  character_element.innerHTML = character_name ;


 }



document.querySelector("#generate").onclick = () => {

  

  let character_name = document.querySelector("#character_name").innerHTML; 
  // filter my Arr to exclude value name
  let filter_obj = my_arr.filter(function (el) {
    return el.name !== character_name ;
  });

   let filter_arr = [];

  filter_obj.forEach((el) =>{filter_arr.push(el.name) });
  
 let finalarray = filter_arr.filter( item => !used_arr.includes(item));


console.log(finalarray);

  let $random_name = document.querySelector("#random_name");
  let randomNumber = Math.floor(Math.random() * finalarray.length);
  let randomCharacter = finalarray[randomNumber];

  

  $random_name.innerHTML = randomCharacter;

  used_arr.push(randomCharacter);



  


  var t = document.getElementById("myList")
  var r = document.createElement("TR");

  r.innerHTML = `
                                             <tr>                                           
                                                <td>${character_name}</td>
                                                <td>${randomCharacter}</td>
                                               
                                            </tr>
                                    `;
  t.tBodies[0].appendChild(r)


 
  

  $('.secret_name').hide()

  $("#generate").hide();
  
  $("#rest").removeAttr("disabled");    

  setTimeout(function(){   $("#next").show(); }, 3000);     
  if(user >= my_arr.length-1 ){
    
    $("#next").attr("disabled", "disabled"); 

   setTimeout(function(){ alert("Congratulaiton"); }, 1000);     
}   
};



document.querySelector("#next").onclick = () => {
  user += 1;
  add_user()

  $("#generate").show();   
  $("#next").hide();

  $('.secret_name').show("slow");
  document.querySelector("#random_name").innerHTML = ""
  if(user >= my_arr.length-1 ){
    
    $("#next").hide();     
  } 
 
 
};


// Click "Congratulations!" to play animation
var particles = ['.blob', '.star'],
	 $congratsSection = $('#congrats'),
	 $title = $('#random_name');

$(function() {
	init({
		numberOfStars: 20,
		numberOfBlobs: 10
	});
		 
	// fancyPopIn();
});

$("#generate").click(fancyPopIn);

function fancyPopIn() {
	reset();
	animateText();
	
	for (var i = 0, l = particles.length; i < l; i++) {
		animateParticles(particles[i]);
	}
}

function animateText() {
	TweenMax.from($title, 0.65, {
		scale: 0.4,
		opacity: 0,
		rotation: 15,
		ease: Back.easeOut.config(5),
	});
}

function animateParticles(selector) {
	var xSeed = _.random(350, 380);
	var ySeed = _.random(120, 170);
	
	$.each($(selector), function(i) {
		var $particle = $(this);
		var speed = _.random(1, 4);
		var rotation = _.random(20, 100);
		var scale = _.random(0.8, 1.5);
		var x = _.random(-xSeed, xSeed);
		var y = _.random(-ySeed, ySeed);

		TweenMax.to($particle, speed, {
			x: x,
			y: y,
			ease: Power1.easeOut,
			opacity: 0,
			rotation: rotation,
			scale: scale,
			onStartParams: [$particle],
			onStart: function($element) {
				$element.css('display', 'block');
			},
			onCompleteParams: [$particle],
			onComplete: function($element) {
				$element.css('display', 'none');
			}
		});
	});
}

function reset() {
	for (var i = 0, l = particles.length; i < l; i++) {
		$.each($(particles[i]), function() {
			TweenMax.set($(this), { x: 0, y: 0, opacity: 1 });
		});
	}
	
	TweenMax.set($title, { scale: 1, opacity: 1, rotation: 0 });
}

function init(properties) {
	for (var i = 0; i < properties.numberOfStars; i++) {
	  $congratsSection.append('<div class="particle star fa fa-star ' + i + '"></div>');
	}
	
	for (var i = 0; i < properties.numberOfBlobs; i++) {
	  $congratsSection.append('<div class="particle blob ' + i + '"></div>');
	}	
}