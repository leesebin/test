//int width = 800;
//int height = 400;

void setup(){
  size(900, 600);
  frameRate(12);
}

void draw(){}
void mouseClicked(){background(254); grrr();}

void grrr(){
  background(254);
  noStroke();
  stroke(#512800);
  strokeWeight(3);
  for(int i=0; i<width; i=i+60){
    for(int j=0; j<height; j=j+60){
      color c = color(int(random(170,255)), int(random(170,255)),int(random(120,255)));
      int alpha = int(random(12,250));
      int size = 60;
      fill(c,alpha);
      rect(i,j,size,size);
    }
  }
}
 
