import React, { Component } from 'react';
import styles from './style.scss';
import classname from 'classnames/bind';
import ScrollAnimation from 'react-animate-on-scroll';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { TextField, NoSsr } from '@material-ui/core';
import Place from './Place/Place';
import Manbutton from './Buttons/Manbutton';
import Girlbutton from './Buttons/Girlbutton'
import Ironbutton from './Buttons/Ironbutton'
import Friendbutton from './Buttons/Friendbutton'
import Lovebutton from './Buttons/Lovebutton'
import ISTJ from './Buttons/ISTJ';
import ISFJ from './Buttons/ISFJ';
import INFJ from './Buttons/INFJ';
import INTJ from './Buttons/INTJ';
import ISTP from './Buttons/ISTP';
import ISFP from './Buttons/ISFP';
import INFP from './Buttons/INFP';
import INTP from './Buttons/INTP';
import ESTP from './Buttons/ESTP';
import ESFP from './Buttons/ESFP';
import ENFP from './Buttons/ENFP';
import ENTP from './Buttons/ENTP';
import ESTJ from './Buttons/ESTJ';
import ESFJ from './Buttons/ESFJ';
import ENFJ from './Buttons/ENFJ';
import ENTJ from './Buttons/ENTJ';


const StyledTextField = styled(TextField)`
  label.Mui-focused {
    color: green;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: red;
    }
    &:hover fieldset {
      border-color: yellow;
    }
    &.Mui-focused fieldset {
      border-color: green;
    }
  }
`;


class Survey extends Component {
  render() {
    return (
      <div className="SurveyMain">
        <>
          <p> - 이름 - </p>
          <NoSsr>
            <StyledTextField label="Name" variant="outlined" id="deterministic-outlined-input" />
          </NoSsr>
          <p> - 전공 - </p>
          <NoSsr>
            <StyledTextField label="major" variant="outlined" id="deterministic-outlined-input" />
          </NoSsr>
          <p> - 학번 - </p>
          <NoSsr>
            <StyledTextField label="StudentNumber" variant="outlined" id="deterministic-outlined-input" />
          </NoSsr>
          <div>
            <p> - 성별 - </p>
            <Manbutton></Manbutton>&nbsp;
            <Girlbutton></Girlbutton>&nbsp;
          </div>
          <p> - 지역 위치(3개) - </p>
          <Place />
          <div className="Category_insta">
            <p> - 인스타 (선택) - </p>
            <NoSsr>
              <StyledTextField label="Insta ID" variant="outlined" id="deterministic-outlined-input" />
            </NoSsr>
            {/*<Inputsample />*/}
          </div>
          <div className="Category_matcing">
            <p> - 매칭 종류 - </p>
            &nbsp;<Friendbutton></Friendbutton>&nbsp;
            <Lovebutton></Lovebutton>&nbsp;
            <Ironbutton></Ironbutton>&nbsp;
          </div>
          <div className="Category_mati">
            <p> - 나의 MBTI - </p>
            &nbsp;<ISTJ></ISTJ>&nbsp;
            <ISFJ></ISFJ>&nbsp;
            <INFJ></INFJ>&nbsp;
            <INTJ></INTJ>
            <br />
            &nbsp;<ISTP></ISTP>&nbsp;
            <ISFP></ISFP>&nbsp;
            <INFP></INFP>&nbsp;
            <INTP></INTP>
            <br />
            &nbsp;<ESTP></ESTP>&nbsp;
            <ESFP></ESFP>&nbsp;
            <ENFP></ENFP>&nbsp;
            <ENTP></ENTP>
            <br />
            &nbsp;<ESTJ></ESTJ>&nbsp;
            <ESFJ></ESFJ>&nbsp;
            <ENFJ></ENFJ>&nbsp;
            <ENTJ></ENTJ>
          </div >

          <div className="Category_mati">
            <p> - 상대 MBTI - </p>
            &nbsp;<ISTJ></ISTJ>&nbsp;
            <ISFJ></ISFJ>&nbsp;
            <INFJ></INFJ>&nbsp;
            <INTJ></INTJ>
            <br />
            &nbsp;<ISTP></ISTP>&nbsp;
            <ISFP></ISFP>&nbsp;
            <INFP></INFP>&nbsp;
            <INTP></INTP>
            <br />
            &nbsp;<ESTP></ESTP>&nbsp;
            <ESFP></ESFP>&nbsp;
            <ENFP></ENFP>&nbsp;
            <ENTP></ENTP>
            <br />
            &nbsp;<ESTJ></ESTJ>&nbsp;
            <ESFJ></ESFJ>&nbsp;
            <ENFJ></ENFJ>&nbsp;
            <ENTJ></ENTJ>
          </div >
          <div className="Category_anything">
            <p> - 동성 매칭 여부 - </p>
            &nbsp;<Button variant="contained" color="primary" size="large">동성이 좋아요</Button>&nbsp;
            <Button variant="contained" color="secondary" size="large">이성이 좋아요</Button>
            <p> - 같은 과 매칭 유무 - </p>
            &nbsp;<Button variant="contained" color="primary" size="large">같은 과 매칭을 원합니다.</Button>&nbsp;
            <Button variant="contained" color="secondary" size="large">같은 과 매칭을 원하지 않습니다.</Button>
            <p> - 군필 여부 - </p>
            &nbsp;<Button variant="contained" color="primary" size="large">군필을 원해요!</Button>&nbsp;
            <Button variant="contained" color="secondary" size="large">미필이여도 괜찮아요!</Button>
            <p> - 흡연 여부 - </p>
            &nbsp;<Button variant="contained" color="primary" size="large">흡연자를 좋아해요!</Button>&nbsp;
            <Button variant="contained" color="secondary">비흡연자를 좋아해요!</Button>

            <br />
            <br />
            <br />
            <br />

          </div>
          <div className="Submit">
            <Button variant="contained" color="inherit" size="large">참여완료</Button>&nbsp;
          </div>
        </>
      </div>
    )
  }
}

export default Survey;