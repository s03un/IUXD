function setup() {
    createCanvas(1600,900)
    background (255)
    strokeWeight(5)
    stroke(255,160,180)

    c = get(0, 0)
    w = 5;
}

// var c = color(255,255,255); color 함수는 p5.js 라이브러리가 준비된 후에만 사용 가능

function draw() {
    fill(104,198,246)
    noStroke()
    rect(0,0,width,200)

    // 팔레트
    fill(255);rect(10,10,80,80);
    fill(0);rect(10,110,80,80);
    fill(255,0,0);rect(110,10,80,80);
    fill(0,255,0);rect(110,110,80,80);
    fill(0,0,255);rect(210,10,80,80);
    fill(255,160,181);rect(210,110,80,80);

    // 팔레트 내의 클릭한 부분의 색을 가져오는 구조
    if(mouseIsPressed&& mouseX < 300 && mouseY<200) { // 굵기 조절할 때 선 색상도 변경되므로 mouseX < 300 추가 
        c= get(mouseX, mouseY) 
    }

    // 굵기 조절 슬라이더: 800,0 ~ 1000,100
    if(mouseIsPressed&&mouseX>800&&mouseX<1000&&mouseY<100) {
        w = (mouseX-800)/10
    }

    stroke(0)
    strokeWeight(5)
    line(800,50,1000,50)
    rect(800+w*10, 10, 25, 80)

    // 좌클릭: 펜
    if(mouseIsPressed && mouseButton === LEFT && mouseY > 210 && pmouseY > 210) { // 박스 부분에는 선이 그려지지 않음
        strokeWeight(w)
        stroke(c)
        line(mouseX, mouseY, pmouseX, pmouseY)
    }

    // 우클릭: 지우개
    // if(mouseIsPressed && mouseButton === RIGHT && mouseY > 210 && pmouseY > 210) { // 박스 부분에는 선이 그려지지 않음
    //     noStroke()
    //     fill(255)
    //     rect(mouseX, mouseY, 20, 20)
    // }
}

// mouseIsPressed의 경우, 좌/우클릭 관계없이 눌리기만 하면 동작
// mouseButton = 0 -> 좌클릭