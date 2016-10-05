var tiles = document.querySelectorAll("li");
var workit = document.getElementById('workit');
var makeit = document.getElementById('makeit');
var doit = document.getElementById('doit');
var makesus = document.getElementById('makesus');
var harder = document.getElementById('harder');
var better = document.getElementById('better');
var faster = document.getElementById('faster');
var stronger = document.getElementById('stronger');
var morethan = document.getElementById('morethan');
var hour = document.getElementById('hour');
var our = document.getElementById('our');
var never = document.getElementById('never');
var ever = document.getElementById('ever');
var after = document.getElementById('after');
var workis = document.getElementById('workis');
var over = document.getElementById('over');



//  clicked.src="../sounds/work_it.wav";
// makeit.src="../sounds/make_it.wav";
// doit.src="../sounds/do_it.wav";
// makesus.src="../sounds/makes_us.wav";
// harder.src="../sounds/harder.wav";
// better.src="../sounds/better.wav";
// faster.src="../sounds/faster.wav";
// stronger.src="../sounds/stronger.wav";
// morethan.src="../sounds/more_than.wav";
// hour.src="../sounds/hour.wav";
// our.src="../sounds/our.wav";
// never.src="../sounds/never.wav";
// ever.src="../sounds/ever.wav";
// after.src="../sounds/after.wav";
// workis.src="../sounds/work_is.wav";
// over.src="../sounds/over.wav";


 for(var i=0;i<tiles.length;i++) {
  tiles[i].addEventListener('click', function() {

      if (this.innerHTML === "Work it") {
         console.log(this);
         workit.src ="../sounds/work_it.wav";
         workit.play();
       }
       else if (this.innerHTML === "Make it") {
         makeit.src="../sounds/make_it.wav";
         makeit.play();
       }
       else if (this.innerHTML === "Do it") {
         doit.src="../sounds/do_it.wav";
         doit.play();
       }
       else if (this.innerHTML === "Makes us") {
         makesus.src="../sounds/makes_us.wav";
         makesus.play();
       }
       else if (this.innerHTML === "Harder") {
         harder.src="../sounds/harder.wav";
         harder.play();
       }
       else if (this.innerHTML === "Better") {
         better.src="../sounds/better.wav";
         better.play();
       }
       else if (this.innerHTML === "Faster") {
         faster.src="../sounds/faster.wav";
         faster.play();
       }
       else if (this.innerHTML === "Stronger") {
        stronger.src="../sounds/stronger.wav";
        stronger.play();
       }
       else if (this.innerHTML === "More than") {
         morethan.src="../sounds/more_than.wav";
         morethan.play();
       }
       else if (this.innerHTML === "Hour") {
         hour.src="../sounds/hour.wav";
         hour.play();
       }
       else if (this.innerHTML === "Our") {
         our.src="../sounds/our.wav";
         our.play();
       }
       else if (this.innerHTML === "Never") {
         never.src="../sounds/never.wav";
         never.play();
       }
       else if (this.innerHTML === "Ever") {
         ever.src="../sounds/ever.wav";
         ever.play();
       }
       else if (this.innerHTML === "After") {
         after.src="../sounds/after.wav";
         after.play();
       }
       else if (this.innerHTML === "Work is") {
         workis.src="../sounds/work_is.wav";
         workis.play();
       }
       else if (this.innerHTML === "Over") {
         over.src="../sounds/over.wav";
         over.play();
       }

    });
    }

    // noises.src=get attribute "../sounds"+sound getattributeby id + .wav
