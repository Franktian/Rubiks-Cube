var tutorial = [ "<p>Consider the 8 corner pieces. Dispite the orientation for the corners, we have 8 unique pieces to place in 8 different areas, that is 8 factorial(8!). And then consider the orientation, each of the eight corner pieces has 3 different directions, which leads to 3 to the power 8 different situations \(3^8\) .</p>",
				 "<p>Similarly to how we calculate the corner pieces. This time consider the side pieces. In a standard 3 x 3 Rubik's cube, we have 12 unique side pieces each contains two different colors. To put these 12 pieces in 12 different positions, we have 12 factorial situations(12!). And consider orientation, that is 2 to the power of 12(2!)</p>",
				 "<p>The above calculation leads us to 8! x $3^8$ x 12! x $2^12$.</p>",
				 "<p>Consider when you take the cube apart and recombine it, there is a chance that you make the correct one, i.e. you can solve this cube. And that is 1/12 to be exact.</p>",
				 "<p>And this situation is because in a standard 3 x 3 rubik's cube, there are some invalid position for the pieces.</p>",
				 "<p>1. You can't rotate a single corner piece.</p><p>2. You can't rotate a single side piece</p><p>3. You can't swap two side pieces.</p>",
				 "<p>Neither of these three situation can be achieved by just a sequence of valid rotation of a rubik's cube.(i.e. you have to achieve this by taking the cube apart)</p>",
 				 "<p>And the first situation leads to three different situations, the second leads to 2 and the third leads to two.</p>",
 				 "<p>The total situations is then 3 x 2 x 2 = 12</p>",
 				 "<p>In another word, There are 12 different rubik's cube you can get if you take the cube apart and recombine it. And only one of them is SOVABLE for us.</p>",
 				 "<p>ence from the formula we get(Contains every situations for the RIGHT and WRONG rubik's cube), divided by 12 is the final answer to the total combinations of a Rubik's Cube.</p>"];
var tutCount = 0;
$(document).ready(function() {

	$('#startButton').on('click', function() {
		startTutorial();
	});

	$('#next').on('click', function() {
		next();
	});
});

function startTutorial() {
	$('#startButton').empty();
	$('#next').html('<button class="btn btn-primary">Next</button>');
	next();
}

function next() {
	if(tutCount < tutorial.length) {
		nextExp(tutCount);
		tutCount++;
	}
}

function nextExp(cout) {
	//$('#container').empty();
	var exp = $(tutorial[cout]).hide();
	$('#container').append(exp);
	exp.fadeIn(1000);
}

