var padZero = function(num) {
    var numDigits = 2;
	var n = abs(num);
	var zeros = max(0, numDigits - floor(n).toString().length );
	var zeroString = pow(10, zeros).toString().substr(1);
	return zeroString + n;
};

var Azimut =[65.81,162,59,288,256];
var Distance =[168,266,303.8,233.8,196];
var modes=["0A0020","4D2262","3C65C9","0101FA","44CCD"];
var FL=[360,355,295,300,410];
var vitesse=[450,462,424,507,471];
var couleurs=[#F42121,#3743FB,#37FBF8,#8737FB,#F8FF26]
var isShapeShown = true;

void setup()
{
    size(700, 700);
    background(0, 0, 0);
    angle=-90
    avion = loadShape("avion4.svg");

}

void draw()
{
    //cree un rectengle semi-trans
    fill(0, 0, 0, 10);
    stroke(0);
    rect(0, 0, 700, 700);

    //translation
    translate(350, 350);
    
    //dessin cercle
    stroke(0, 245, 8);//couleur
    strokeWeight(1);//largeur
    noFill();

   
    ellipse(0, 0, 700, 700);
    ellipse(0, 0, 560, 560);
    ellipse(0, 0, 420, 420);
    ellipse(0, 0, 280, 280);
    ellipse(0, 0, 140, 140);
    //ligne
    x0 = cos(radians(angle)) * 350;
    y0 = sin(radians(angle)) * 350;

    stroke(90, 245, 8);
    strokeWeight(2);
    line(0, 0, 0,350); 
    line(0, 0, 350,0); 
    line(0, 0, -350,0); 
    line(0, 0,0,-350); 

    stroke(90, 245, 8);
    strokeWeight(7);
    line(0, 0, x0,y0); 
    angle += 0.9

    
    
    //avions
    for(i=0;i<5;i++){
      r=Distance[i]
      Azi=Azimut[i]-90
      var x= r * cos(radians(Azi));
      var y= r * sin(radians(Azi));
     

    //filtrage
    if(isShapeShown ||! (( x > -300 && x <-100) && (y > -100 && y < 150))){
    
    shape(avion, x,y, 20, 20);
    fill(couleurs[i]);
    textSize(12);
    textAlign(CENTER)
    text(modes[i]+"\n"+'FL'+FL[i]+'  '+vitesse[i] , x+25, y);
    }
   
    document.querySelector('button').addEventListener('click' , () => {
        isShapeShown = false
    })
    
    //zone
    noFill( )
    stroke(255, 73, 0);
    strokeWeight(5);
    rect(-300,-100,200,250)

    //clock
  var s = second(); 
  var m = minute();  
  var h = hour(); 
  fill(43, 255, 0);
  textFont(createFont("monospace", 10), 10);
  text(h + " hours, " + m + " minutes, " + s + " seconds", -340, 325);
  textSize(10);
  text(padZero(h) + ":" + padZero(m) + ":" + padZero(s), -340, 340);
 
}

}
