# JavaScript_ball_action_project
# ball_action_project
JavaScript 책을 공부를 하고 너무 끝도 없이 이론이 깊어져서 그냥 작은 프로젝트를 함께 하고 싶었다. 인터랙티브 디벨로퍼 님의 공튀기는 canvas 애니메이션을 보고 책을 통해 배웠던 개념들을 더해서 공의 갯수 조절과 공들의 색상값 들과 속도 값을 랜덤으로 주는 기능을 참고 했다. 처음에는 책으로 배웠던 개념들이 맞나 싶을 정도로 복잡해지는 코드들에 애를 먹었지만 써보며 머리에서 개념들이 자리 잡았던 것 같다.

우선 프로젝트의 생성 작업의 순서는
1. canvas resize를 통해 사용자 브라우저 size의 크기를 canvas가 100%로 이용하게 해주는 작업을 하였다.
2. Ball 생성자를 만들어 주어 canvas에 움직이게 하는 작업을 하였다.
3. ball의 속도값과 색상값을 랜덤으로 주는 코드를 추가 하였다.
4. block을 만들어서 block에 닿을 경우 튕기는 코드를 만들었다.
5. block을 stroke로 선만 형성후 안에 text를 넣어서 텍스트에 튕기는 것 처럼 보이게 하였다.
6. for 문을 이용하여 공의 갯수를 컨트롤 할 수 있게 하였다.

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/67617819/89618075-618d5d00-d8c6-11ea-9153-ed74162f283b.gif)



<br>

## 1. Resize()

resize()를 통해 사용자의 가변하는 윈도우 크기에 맞추어 캔버스에 그려지게 하기 위해서 
```js
this.stageWidth = document.body.clientWidth;
this.stageHeight = document.body.clientHeight;
```
 를 작성해 준다.


그리고 retina display의 픽셀 집약도가 2배 높기 때문에 픽셀이 뭉개지는 것을 방지하기 위하여 
```js
this.canvas.width = this.stageWidth * 2;
this.canvas.height = this.stageHeight * 2;
this.ctx.scale(2, 2)
```
를 작성하여 retina display에서도 잘보이게 해준다.

<br>

## 2. Ball 생성자

export 할 수 있는 ball class를 형성하여 constructor로 변수 값들의 초기화를 해 준다.
이때 공의 초기 생성 지점을 random하게 해주기 위해서
```js
this.x = diameter + (Math.random() * stageWidth - diameter);
this.y = diameter + (Math.random() * stageHeight -diameter);
```
로 설정해 준다. 


그리고 draw prototype을 만들어서 공이 그려지게 한 후 공이 윈도우에 닿을 경우 튕기는 bouncewindow() 를 작성해 준다.

<br>

## 3. ball의 색상값과 속도 값의 random설정

속도값의 경우 control이 가능하게 하는 것이 좀더 가변적인 ui가 될것 같아서 속도값의
최솟값과 최댓값 사이에서 랜덤하게 설정되도록 하였다.

속도 값(vx, vy)의 경우 결국 각도를 포함한 벡터값으로 생각하면 되기 때문에 
```js
let v = vmin + Math.random() * (vmax - vmin);
let t = 2 * Math.PI * Math.random();
this.vx = v * Math.cos(t);
this.vy = v * Math.sin(t);
```
를 한후 `return this;`를 해준다.

이렇게 설정된 값을 다시 뱉어 주어야 ball의 요소의 속도 값이 형성된 것 이다.

그리고 색상값또한 위와 같이 랜덤하게 형성해 준다.

<br>

## 4, 5. Text block
원래는 그냥 rect를 이용한 block이 었는데 그냥 블록 보다는 text의 삽입을 통해서 만드는 것이 조금더 재미있을 것 같았다.

그래서 rect를 그린 후 fill()을 하는 대신에  stroke를 이용하여 테두리만을 그려 준후에 그안에 fillText를 이용하여 글자를 넣어 주었다. 

굉장히 뭔가 이렇게 끝난 후 정리 할 때는 쉬운데 나름 이 작업을 어떻게 해결하는 지를 조금 고민했던것 같다. 원래는 textbox 개념이 있을 줄 알고 찾아 봤는데 잘 찾지 못하겠어서 고민하다가 텍스트와 rect의 시작 x, y값은 맞춘후 width, height값 만을 달리 하여 해결 하였다.


<br>

## 6. 공의 다수 생성

for문을 사용하여 각각의 공의 인스턴스를 배열로 담아 표현하는 식으로 작성했다.



![ezgif com-video-to-gif](https://user-images.githubusercontent.com/67617819/89618075-618d5d00-d8c6-11ea-9153-ed74162f283b.gif)

# 고찰 
처음에는 이런 액션의 난이도가 느끼기에 이렇게 어려울 줄은 몰랐다. class의 형성 부터 import해 와서 하는 과정과 중간의 객체의 프로토타입 메서드의 호출후 this를 뱉어 내는 과정 까지 익숙한 것이 없었던 것 같다. 개념이 부족한건가 헷갈리는 순간도 매번이었던 것 같다. 

하지만 rect 로 text를 감싸는 것 등등의 해결 과정 처럼 아주 정석적이고 정답인 해결과정은 없는 것 같이 느껴졌다. 반대로 지금 구현한 이 인터랙션 또한 고치려면 한참을 고쳐 나갈 수있을 것 같다.

이 공 몇개 튀기는 과정에서 이렇게 많은 것을 얻어 갈 수 있을 거라고는 생각을 안했는데 너무 많은 도움과 경험이여서 개인 적으로는 좀 신났다.

또한 느낀 점은 요새 클론 코딩을 많이 하는것 같은데 그 과정에서 코딩을 그저 보고 따라 치는 수준이면 진짜 오타 잡기만 바쁘다 하루 다 갈 것 같다. 나도 처음에는 그저 따라 해 보다가 와 이건 아닌것 같아서 펜들고 이 프로젝티가 흘러가는 방향의 파악과 코드의 구조를 잡은후에 작성하였더닌 진행 속도가 세배는 빨랐던것 같다. 뭐든 자기의 것으로 소화 후에 뱉어내는 것의 중요성을 조금 느꼇던 것 같다.
