function AppSample() {
  let today = new Date()
  let name = prompt('이름을 입력해라.')

  // 현재 날짜를 반환
  let date = today.toLocaleDateString()
  console.log(date)

  // 현재 달 가져오기
  let month = today.getMonth() + 1

  let season = ''

  // 계절 판단하는 로직 구현
  if (month >= 3 && month <= 5) {
    season = '봄'
  } else if (month >= 6 && month <= 8) {
    season = '여름'
  } else if (month >= 9 && month <= 11) {
    season = '가을'
  } else {
    season = '겨울'
  }

  return (
    <div>
      <h1>{date}</h1>
      <hr />
      <p>
        {name}님 지금은 {season}이다. 좋은 하루 보내라ㅗ
      </p>
    </div>
  )
}
/*
function Calender() {
  const dt = new Date()
  const dateNow = dt.toLocaleDateString()
  let dateMonth = dt.getMonth() + 1
  let name = prompt('이름을 입력해주세요.')
  let season = ''
  console.log(dateMonth)

  if (dateMonth >= 3 && dateMonth < 6) {
    season = '봄'
  } else if (dateMonth >= 5 && dateMonth < 9) {
    season = '여름'
  } else if (dateMonth >= 9 && dateMonth < 12) {
    season = '가을'
  } else {
    season = '겨울'
  }

  return (
    <div>
      <h1>{dateNow}</h1>
      <hr></hr>
      <h3>
        {name}님 지금은 {season}입니다. 좋은 하루 보내세요!
      </h3>
    </div>
  )
}

function AppSample() {
  return (
    <div>
      <Calender />
    </div>
  )
} */

export default AppSample
