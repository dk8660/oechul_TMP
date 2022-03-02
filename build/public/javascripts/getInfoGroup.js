"use strict";

var FieldList = ["강남구", "서초구", "마포구", "동대문구", "성남시", "수원시", "용인시", "고양시", "인천", "대전", "강릉", "전주", "광주광역시", "대구", "부산"];

function fieldSelectFunction() {
  var selection = document.getElementById("fieldSelect").value;

  if (selection.value == "default") {
    var _defaultOption = document.getElementById("majorDefaultOption");

    _defaultOption.selected = true;
    return;
  }

  var input = document.getElementById("fieldInput");
  input.innerHTML = "";
  var block = document.createElement("span");
  block.className = "selection";
  var content = document.createElement("span");
  content.innerHTML = FieldList[selection];
  block.appendChild(content);
  input.appendChild(block);
  var Field = document.getElementById("Field");
  Field.value = parseInt(selection);
  var defaultOption = document.getElementById("fieldDefaultOption");
  defaultOption.selected = true;
}

function majorSelectFunction() {
  var selection = document.getElementById("majorSelect");

  if (selection.value == "default") {
    var _defaultOption2 = document.getElementById("majorDefaultOption");

    _defaultOption2.selected = true;
    return;
  }

  var input = document.getElementById("majorInput");
  input.innerHTML = "";
  var block = document.createElement("span");
  block.className = "selection";
  var content = document.createElement("span");
  content.innerHTML = selection.value;
  block.appendChild(content);
  input.appendChild(block);
  var Major = document.getElementById("Major");
  Major.value = selection.value;
  var defaultOption = document.getElementById("majorDefaultOption");
  defaultOption.selected = true;
}

function genderButton(num) {
  var current, other;

  if (num == 0) {
    current = document.getElementById("genderButton0");
    other = document.getElementById("genderButton1");
  } else {
    current = document.getElementById("genderButton1");
    other = document.getElementById("genderButton0");
  }

  current.className = "genderButton_on";
  other.className = "genderButton_off";
  var gender = document.getElementById("Gender");
  gender.value = num;
}

var thirdStudent = document.createElement("div");
thirdStudent.id = "thirdStudent";
var thirdStudent_STnumber = document.createElement("input");
thirdStudent_STnumber.type = "text";
thirdStudent_STnumber.name = "thirdStudent_STnumber";
thirdStudent_STnumber.className = "GroupInput";
thirdStudent_STnumber.required = true;
var thirdStudent_STnumber_div = document.createElement("div");
var thirdStudent_STnumber_p = document.createElement("p");
thirdStudent_STnumber_p.innerHTML = "13. 세 번째 멤버 학번";
thirdStudent_STnumber_div.appendChild(thirdStudent_STnumber_p);
thirdStudent_STnumber_div.appendChild(thirdStudent_STnumber);
var thirdStudent_Name = document.createElement("input");
thirdStudent_Name.type = "text";
thirdStudent_Name.name = "thirdStudent_Name";
thirdStudent_Name.required = true;
thirdStudent_Name.className = "GroupInput";
var thirdStudent_Name_div = document.createElement("div");
var thirdStudent_Name_p = document.createElement("p");
thirdStudent_Name_p.innerHTML = "14. 세 번째 멤버 이름";
thirdStudent_Name_div.appendChild(thirdStudent_Name_p);
thirdStudent_Name_div.appendChild(thirdStudent_Name);
var thirdStudent_instagramID = document.createElement("input");
thirdStudent_instagramID.type = "text";
thirdStudent_instagramID.name = "thirdStudent_instagramID";
thirdStudent_instagramID.placeholder = "필수가 아닙니다!";
thirdStudent_instagramID.className = "GroupInput";
var thirdStudent_instagramID_div = document.createElement("div");
var thirdStudent_instagramID_p = document.createElement("p");
thirdStudent_instagramID_p.innerHTML = "15. 세 번째 멤버 인스타그램 아이디";
thirdStudent_instagramID_div.appendChild(thirdStudent_instagramID_p);
thirdStudent_instagramID_div.appendChild(thirdStudent_instagramID);
var thirdStudent_kakaoID = document.createElement("input");
thirdStudent_kakaoID.type = "text";
thirdStudent_kakaoID.name = "thirdStudent_kakaoID";
thirdStudent_kakaoID.required = true;
thirdStudent_kakaoID.className = "GroupInput";
var thirdStudent_kakaoID_div = document.createElement("div");
var thirdStudent_kakaoID_p = document.createElement("p");
thirdStudent_kakaoID_p.innerHTML = "16. 세 번째 멤버 카카오톡 아이디";
thirdStudent_kakaoID_div.appendChild(thirdStudent_kakaoID_p);
thirdStudent_kakaoID_div.appendChild(thirdStudent_kakaoID);
thirdStudent.appendChild(thirdStudent_STnumber_div);
thirdStudent.appendChild(thirdStudent_Name_div);
thirdStudent.appendChild(thirdStudent_instagramID_div);
thirdStudent.appendChild(thirdStudent_kakaoID_div);
var forthStudent = document.createElement("div");
forthStudent.id = "forthStudent";
var forthStudent_STnumber = document.createElement("input");
forthStudent_STnumber.type = "text";
forthStudent_STnumber.name = "forthStudent_STnumber";
forthStudent_STnumber.required = true;
forthStudent_STnumber.className = "GroupInput";
var forthStudent_STnumber_div = document.createElement("div");
var forthStudent_STnumber_p = document.createElement("p");
forthStudent_STnumber_p.innerHTML = "17. 네 번째 멤버 학번";
forthStudent_STnumber_div.appendChild(forthStudent_STnumber_p);
forthStudent_STnumber_div.appendChild(forthStudent_STnumber);
var forthStudent_Name = document.createElement("input");
forthStudent_Name.type = "text";
forthStudent_Name.name = "forthStudent_Name";
forthStudent_Name.required = true;
forthStudent_Name.className = "GroupInput";
var forthStudent_Name_div = document.createElement("div");
var forthStudent_Name_p = document.createElement("p");
forthStudent_Name_p.innerHTML = "18. 네 번째 멤버 이름";
forthStudent_Name_div.appendChild(forthStudent_Name_p);
forthStudent_Name_div.appendChild(forthStudent_Name);
var forthStudent_instagramID = document.createElement("input");
forthStudent_instagramID.type = "text";
forthStudent_instagramID.name = "forthStudent_instagramID";
forthStudent_instagramID.placeholder = "필수가 아닙니다!";
forthStudent_instagramID.className = "GroupInput";
var forthStudent_instagramID_div = document.createElement("div");
var forthStudent_instagramID_p = document.createElement("p");
forthStudent_instagramID_p.innerHTML = "19. 네 번째 멤버 인스타그램 아이디";
forthStudent_instagramID_div.appendChild(forthStudent_instagramID_p);
forthStudent_instagramID_div.appendChild(forthStudent_instagramID);
var forthStudent_kakaoID = document.createElement("input");
forthStudent_kakaoID.type = "text";
forthStudent_kakaoID.name = "forthStudent_kakaoID";
forthStudent_kakaoID.required = true;
forthStudent_kakaoID.className = "GroupInput";
var forthStudent_kakaoID_div = document.createElement("div");
var forthStudent_kakaoID_p = document.createElement("p");
forthStudent_kakaoID_p.innerHTML = "20. 네 번째 멤버 카카오톡 아이디";
forthStudent_kakaoID_div.appendChild(forthStudent_kakaoID_p);
forthStudent_kakaoID_div.appendChild(forthStudent_kakaoID);
forthStudent.appendChild(forthStudent_STnumber_div);
forthStudent.appendChild(forthStudent_Name_div);
forthStudent.appendChild(forthStudent_instagramID_div);
forthStudent.appendChild(forthStudent_kakaoID_div);

function memberSelectFunction() {
  var selection = document.getElementById("memberSelect");

  if (selection.value == "default") {
    var defaultOption = document.getElementById("memberDefaultOption");
    defaultOption.selected = true;
    return;
  }

  var currentMember = document.getElementById("currentMember");
  var additionalMember = document.getElementById("additionalMember");

  if (selection.value == 3 && (!currentMember.value || currentMember.value == 2)) {
    additionalMember.appendChild(thirdStudent);
  } else if (selection.value == 4 && (!currentMember.value || currentMember.value == 2)) {
    additionalMember.appendChild(thirdStudent);
    additionalMember.appendChild(forthStudent);
  } else if (selection.value == 4 && currentMember.value == 3) {
    additionalMember.appendChild(forthStudent);
  } else if (selection.value == 2 && currentMember.value == 3) {
    additionalMember.removeChild(thirdStudent);
  } else if (selection.value == 2 && currentMember.value == 4) {
    additionalMember.removeChild(forthStudent);
    additionalMember.removeChild(thirdStudent);
  } else if (selection.value == 3 && currentMember.value == 4) {
    additionalMember.removeChild(forthStudent);
  }

  currentMember.value = selection.value;
}