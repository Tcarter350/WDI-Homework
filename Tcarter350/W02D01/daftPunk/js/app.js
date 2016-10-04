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
    });
    }
