console.log('js enter')

// step 1. moveLeft 함수를 선언한다.
let move = 0;
const moveLeft = () => {
    console.log('moveLeft function')
    if (move < 1200) {
        move += 50;
        $('#horse').css('right', move + 'px')
    }

}
//      1-1) id가 horse인 말을 가져와서
//      1-2) moveLeft 함수가 호출될 때마다, 그 말을 왼쪽으로 50px씩 이동
//              단, 말이 배경을 벗어나지 않도록 할 것.

// step 2. moveright 함수를 선언한다.
const moveRight = () => {
    console.log('moveRight Function')
    if (move > 0) {
        move -= 50;
        $('#horse').css('right', move + 'px')
    }
}


//      2-1) id가 horse인 말을 가져와서
//      2-2) moveRight 함수가 호출될 때마다, 그 말을 오른쪽으로 50px씩 이동
//              단, 말이 배경을 벗어나지 않도록 할 것.



// step 3. 왼쪽 버튼을 누를 때마다, moveLeft 함수를 호출
$('.left').on('click', moveLeft)
// step 4. 오른쪽 버튼을 누를 때마다, moveRight 함수를 호출
$('.right').on('click', moveRight)


/*주의할 점
a. bnt left는 하나의 클래스 이름이 아니라 btn이라는 클래스/
left라는 클래스 둘 다 포함
b. 왼쪽으로 이동하든, 오른쪽으로 이동하든 결국 선은 하나로 이어져있다.
출발선도 하나
c. DOM 사용 X, jQuery로 사용!
 */

const Jump = () => {
    // animate를 참고해서 말을 점프시켜 보자
    console.log('jump function')
    $('#horse')
        .stop()
        .animate({ bottom: '400px' }, 500)
        .animate({ bottom: '200px' }, 500)

}
        $('.jump').on('click', Jump)
// 추가!
// (1) 마우스가 아니라 키보드를 통해서 말을 이동시켜 보자
$('body').on('keydown', (e) => {
    console.log('key down', e.key)

    if (e.key === 'ArrowLeft') {
        moveLeft()
    } else if (e.key === 'ArrowRight') {
        moveRight()
    } else if (e.key === ' ') {
        console.log('spacebar')
        Jump()
    }
})
