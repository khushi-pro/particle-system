var particles = []

function setup() {
  createCanvas(1440, 810);
  angleMode(DEGREES)
}

function draw() {
  background(30);
  
  for(var i = 0; i <10; i++) {
    p = new Particle()
    particles.push(p)
  }

  for(var i = 0; i < particles.length; i++) {
    if (particles[i].alpha > 0) {
        particles[i].update()
        particles[i].show()
    } else{
      particles.splice(i, 1)
    }
  }
  console.log(particles.length);
  
}
