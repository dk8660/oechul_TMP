let FieldList = [
  "강남구",
  "서초구",
  "마포구",
  "동대문구",
  "성남시",
  "수원시",
  "용인시",
  "고양시",
  "인천",
  "대전",
  "강릉",
  "전주",
  "광주광역시",
  "대구",
  "부산",
];

function fieldSelectFunction() {
  let selection = document.getElementById("fieldSelect").value;
  if (selection.value == "default") {
    let defaultOption = document.getElementById("majorDefaultOption");
    defaultOption.selected = true;
    return;
  }
  let input = document.getElementById("fieldInput");
  input.innerHTML = "";

  let block = document.createElement("span");
  block.className = "selection";

  let content = document.createElement("span");
  content.innerHTML = FieldList[selection];

  block.appendChild(content);

  input.appendChild(block);

  let Field = document.getElementById("Field");
  Field.value = parseInt(selection);

  let defaultOption = document.getElementById("fieldDefaultOption");
  defaultOption.selected = true;
}

function majorSelectFunction() {
  let selection = document.getElementById("majorSelect");
  if (selection.value == "default") {
    let defaultOption = document.getElementById("majorDefaultOption");
    defaultOption.selected = true;
    return;
  }

  let input = document.getElementById("majorInput");
  input.innerHTML = "";

  let block = document.createElement("span");
  block.className = "selection";

  let content = document.createElement("span");
  content.innerHTML = selection.value;

  block.appendChild(content);

  input.appendChild(block);

  let Major = document.getElementById("Major");
  Major.value = selection.value;

  let defaultOption = document.getElementById("majorDefaultOption");
  defaultOption.selected = true;
}

function genderButton(num) {
  let current, other;
  if (num == 0) {
    current = document.getElementById("genderButton0");
    other = document.getElementById("genderButton1");
  } else {
    current = document.getElementById("genderButton1");
    other = document.getElementById("genderButton0");
  }

  current.className = "genderButton_on";
  other.className = "genderButton_off";

  let gender = document.getElementById("Gender");
  gender.value = num;
}

let thirdStudent = document.createElement("div");
thirdStudent.id = "thirdStudent";

let thirdStudent_STnumber = document.createElement("input");
thirdStudent_STnumber.type = "text";
thirdStudent_STnumber.name = "thirdStudent_STnumber";
thirdStudent_STnumber.className = "GroupInput";
thirdStudent_STnumber.required = true;
let thirdStudent_STnumber_div = document.createElement("div");
let thirdStudent_STnumber_p = document.createElement("p");
thirdStudent_STnumber_p.innerHTML = "13. 세 번째 멤버 학번";
thirdStudent_STnumber_div.appendChild(thirdStudent_STnumber_p);
thirdStudent_STnumber_div.appendChild(thirdStudent_STnumber);

let thirdStudent_Name = document.createElement("input");
thirdStudent_Name.type = "text";
thirdStudent_Name.name = "thirdStudent_Name";
thirdStudent_Name.required = true;
thirdStudent_Name.className = "GroupInput";
let thirdStudent_Name_div = document.createElement("div");
let thirdStudent_Name_p = document.createElement("p");
thirdStudent_Name_p.innerHTML = "14. 세 번째 멤버 이름";
thirdStudent_Name_div.appendChild(thirdStudent_Name_p);
thirdStudent_Name_div.appendChild(thirdStudent_Name);

let thirdStudent_instagramID = document.createElement("input");
thirdStudent_instagramID.type = "text";
thirdStudent_instagramID.name = "thirdStudent_instagramID";
thirdStudent_instagramID.placeholder = "필수가 아닙니다!";
thirdStudent_instagramID.className = "GroupInput";
let thirdStudent_instagramID_div = document.createElement("div");
let thirdStudent_instagramID_p = document.createElement("p");
thirdStudent_instagramID_p.innerHTML = "15. 세 번째 멤버 인스타그램 아이디";
thirdStudent_instagramID_div.appendChild(thirdStudent_instagramID_p);
thirdStudent_instagramID_div.appendChild(thirdStudent_instagramID);

let thirdStudent_kakaoID = document.createElement("input");
thirdStudent_kakaoID.type = "text";
thirdStudent_kakaoID.name = "thirdStudent_kakaoID";
thirdStudent_kakaoID.required = true;
thirdStudent_kakaoID.className = "GroupInput";
let thirdStudent_kakaoID_div = document.createElement("div");
let thirdStudent_kakaoID_p = document.createElement("p");
thirdStudent_kakaoID_p.innerHTML = "16. 세 번째 멤버 카카오톡 아이디";
thirdStudent_kakaoID_div.appendChild(thirdStudent_kakaoID_p);
thirdStudent_kakaoID_div.appendChild(thirdStudent_kakaoID);

thirdStudent.appendChild(thirdStudent_STnumber_div);
thirdStudent.appendChild(thirdStudent_Name_div);
thirdStudent.appendChild(thirdStudent_instagramID_div);
thirdStudent.appendChild(thirdStudent_kakaoID_div);

let forthStudent = document.createElement("div");
forthStudent.id = "forthStudent";

let forthStudent_STnumber = document.createElement("input");
forthStudent_STnumber.type = "text";
forthStudent_STnumber.name = "forthStudent_STnumber";
forthStudent_STnumber.required = true;
forthStudent_STnumber.className = "GroupInput";
let forthStudent_STnumber_div = document.createElement("div");
let forthStudent_STnumber_p = document.createElement("p");
forthStudent_STnumber_p.innerHTML = "17. 네 번째 멤버 학번";
forthStudent_STnumber_div.appendChild(forthStudent_STnumber_p);
forthStudent_STnumber_div.appendChild(forthStudent_STnumber);

let forthStudent_Name = document.createElement("input");
forthStudent_Name.type = "text";
forthStudent_Name.name = "forthStudent_Name";
forthStudent_Name.required = true;
forthStudent_Name.className = "GroupInput";
let forthStudent_Name_div = document.createElement("div");
let forthStudent_Name_p = document.createElement("p");
forthStudent_Name_p.innerHTML = "18. 네 번째 멤버 이름";
forthStudent_Name_div.appendChild(forthStudent_Name_p);
forthStudent_Name_div.appendChild(forthStudent_Name);

let forthStudent_instagramID = document.createElement("input");
forthStudent_instagramID.type = "text";
forthStudent_instagramID.name = "forthStudent_instagramID";
forthStudent_instagramID.placeholder = "필수가 아닙니다!";
forthStudent_instagramID.className = "GroupInput";
let forthStudent_instagramID_div = document.createElement("div");
let forthStudent_instagramID_p = document.createElement("p");
forthStudent_instagramID_p.innerHTML = "19. 네 번째 멤버 인스타그램 아이디";
forthStudent_instagramID_div.appendChild(forthStudent_instagramID_p);
forthStudent_instagramID_div.appendChild(forthStudent_instagramID);

let forthStudent_kakaoID = document.createElement("input");
forthStudent_kakaoID.type = "text";
forthStudent_kakaoID.name = "forthStudent_kakaoID";
forthStudent_kakaoID.required = true;
forthStudent_kakaoID.className = "GroupInput";
let forthStudent_kakaoID_div = document.createElement("div");
let forthStudent_kakaoID_p = document.createElement("p");
forthStudent_kakaoID_p.innerHTML = "20. 네 번째 멤버 카카오톡 아이디";
forthStudent_kakaoID_div.appendChild(forthStudent_kakaoID_p);
forthStudent_kakaoID_div.appendChild(forthStudent_kakaoID);

forthStudent.appendChild(forthStudent_STnumber_div);
forthStudent.appendChild(forthStudent_Name_div);
forthStudent.appendChild(forthStudent_instagramID_div);
forthStudent.appendChild(forthStudent_kakaoID_div);

function memberSelectFunction() {
  let selection = document.getElementById("memberSelect");
  if (selection.value == "default") {
    let defaultOption = document.getElementById("memberDefaultOption");
    defaultOption.selected = true;
    return;
  }

  let currentMember = document.getElementById("currentMember");
  let additionalMember = document.getElementById("additionalMember");

  if (
    selection.value == 3 &&
    (!currentMember.value || currentMember.value == 2)
  ) {
    additionalMember.appendChild(thirdStudent);
  } else if (
    selection.value == 4 &&
    (!currentMember.value || currentMember.value == 2)
  ) {
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
