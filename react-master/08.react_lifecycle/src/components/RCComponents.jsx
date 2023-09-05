import React, { Component } from 'react'

export default class RCComponents extends Component {

    // 생성자 : state, 변수, 함수 값들을 초기화할 때 사용
    // 화면이 렌더링 되기 전 실행
    constructor(){
        // state 초기화
        // state를 만들려면 이게 실행이 되어야 만들 수 있다
        super();
        this.state = { num:0 }

        // 실행할 함수 연결 bind 묶어 주겠다
        this.handleIncrement = this.handleIncrement.bind(this)

        console.log('1.constructor - 컴포넌트 생성');
    }

    handleIncrement(){
        this.setState({
            num: this.state.num+1
        })
    }

    // Mount
    componentDidMount(){
        console.log('3. 화면 첫 렌더링:');
    }
    // Update
    componentDidUpdate(){
        console.log('화면 업데이트');
    }

  render() {
    console.log('2. render - 화면 렌더링 되는 중');

    return (
      <div>
        RCComponents:{this.state.num}<br/>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    //   state 중에 이 스테이트를 쓸 거야
    )
  }
}

// rafce 대신에 RCC 치면 됨