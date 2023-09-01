// 휴대폰번호 입력하면 포커스 옆으론 넘어가기
function Phonenum1() {
    const phone1 = document.getElementById('phone1').value
    if (phone1.length === 3) {
        document.getElementById('phone2').focus();
    }
}
function Phonenum2() {
    const phone2 = document.getElementById('phone2').value
    if (phone2.length === 4) {
        document.getElementById('phone3').focus();
    }
}
function Phonenum3() {
    const phone3 = document.getElementById('phone3').value
    if (phone3.length === 4) {
        document.getElementById('sendNum').focus();
        document.getElementById('sendNum').setAttribute('style', 'background-color:smokegray;')
        document.getElementById('sendNum').disabled = false;
    }
}
// 문자 인증 타이머
function initButton() {
    document.getElementById('sendNum').disabled = true;
    document.getElementById('completion').disabled = true;
    document.getElementById('certificationNum').innerHTML = '000000';
    document.getElementById('timerLimit').innerHTML = '03:00';
    document.getElementById('sendNum').setAttribute('style', 'background-color:none;')
    document.getElementById('completion').setAttribute('style', 'background-color:none;')
}

let processID = -1;

const getToken = () => {
    document.getElementById('completion').setAttribute('style', 'background-color:smokegray;')
    document.getElementById('completion').disabled = false;

    // 실행중이면 타이머 중지
    if (processID != -1) clearInterval(processID);
    // 6자리 랜덤 토큰을 생성
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, '0')
    // certificationNumber이라는 id에 생성된 토큰 표시
    document.getElementById("certificationNum").innerText = token;
    let time = 180;
    processID = setInterval(function () {
        // 시간이 0 이하이거나 "sendNum" 버튼이 비활성화된 경우 타이머 중지하고 초기화 함수 호출
        if (time < 0 || document.getElementById("sendNum").disabled) {
            clearInterval(processID);
            initButton();
            return;
        }
        // 남은 시간을 분:초 형식으로 계산하여 표시
        let mm = String(Math.floor(time / 60)).padStart(2, "0");
        let ss = String(time % 60).padStart(2, "0");
        let result = mm + ":" + ss;
        document.getElementById("timerLimit").innerText = result;
        time--;
    }, 50);
};

function checkCompletion() {
    alert("문자 인증이 완료되었습니다.")
    initButton();
    document.getElementById("completion").innerHTML = "인증완료"
    document.getElementById("signupBtn").disabled = false;
    document.getElementById("signupBtn").setAttribute("style", "background-color:smokegray;")
}

function signupCheck(){
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let passwordCheck = document.getElementById("passwordCheck").value;
    let gender1 = document.getElementById("gender1").checked;
    let gender2 = document.getElementById("gender2").checked;
    let check = true;

    if (email.includes('@')) {
        let emailID = email.split('@')[0]
        let emailServer = email.split('@')[1]
        if (emailID === '' || emailServer === '') {
            document.getElementById('emailError').innerHTML = '이메일이 올바르지 않습니다.'
            check = false
        }
        else {
            document.getElementById('emailError').innerHTML = ''
        }
    } else {
        document.getElementById('emailError') = '이메일이 올바르지 않습니다.'
        check = false
    }
}
if (name === "") {
    document.getElementById("nameError").innerHTML = "이름이 올바르지 않습니다."
    check = false
} else {
    document.getElementById("nameError").innerHTML = ""
}

if (password !== passwordCheck) {
    document.getElementById("passwordError").innerHTML = ""
    document.getElementById("passwordCheckError").innerHTML = "비밀번호가 동일하지 않습니다."
    check = false
} else {
    document.getElementById("passwordError").innerHTML = ""
    document.getElementById("passwordCheckError").innerHTML = ""
}

if (password === "") {
    document.getElementById("passwordError").innerHTML = "비밀번호를 입력해주세요."
    check = false
} else {
    document.getElementById("passwordError").innerHTML = ""
}
if (passwordCheck === "") {
    document.getElementById("passwordCheckError").innerHTML = "비밀번호를 다시 입력해주세요."
    check = false
} else {
    document.getElementById("passwordCheckError").innerHTML = ""
}

if (!gender1 && !gender2) {
    document.getElementById("genderError").innerHTML = "성별을 선택해주세요."
    check = false
} else {
    document.getElementById("genderError").innerHTML = ""
}

if (check) {
    document.getElementById("emailError").innerHTML = ""
    document.getElementById("nameError").innerHTML = ""
    document.getElementById("passwordError").innerHTML = ""
    document.getElementById("passwordCheckError").innerHTML = ""
    document.getElementById("genderError").innerHTML = ""

    
    setTimeout(function () {
        alert("가입이 완료되었습니다.")
    }, 0);
}

