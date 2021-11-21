import React, { useState } from 'react'  //useState를 사용하기 위하여 import
import { Component } from 'react'

class Inputsample extends Component {
  //text : 현재값 / setText: 변경할 값 / useState({초기값})
  state = {
    insta_id: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    const { insta_id } = this.state;
    const { onChange } = this;
    return (
      <div className="input">
        <input type="text" name="insta_id"
          placeholder="인스타 아이디" value={insta_id} onChange={onChange} />
      </div>
    );
  }
}

export default Inputsample;