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

let Field_List = [];

function FieldButton(num) {
  let current = document.getElementById("Field" + num);

  if ((current.className = "FieldButton_on")) {
    current.className = "FieldButton_off";
    let index = Field_List.findIndex(num);
    Field_List.pop(index);
  } else {
    if (Field_List.length < 2) {
      current.className = "FieldButton_on";
      Field_List.push(num);
    }
  }

  Field_List.sort();
  let str = "";
  Field_List.forEach((element) => {
    if (str.length != 0) {
      str = str + ", " + element;
    } else {
      str = str + element;
    }
  });

  let Field = document.getElementById("Field");
  Field.value = str;
}

let MBTI_List = [];

function WantedMBTIButton(num) {
  let current = document.getElementById("MBTI" + num);

  if ((current.className = "MBTIButton_on")) {
    current.className = "MBTIButton_off";
    let index = MBTI_List.findIndex(num);
    MBTI_List.pop(index);
  } else {
    current.className = "MBTIButton_on";
    MBTI_List.push(num);
  }

  MBTI_List.sort();
  let str = "";
  MBTI_List.forEach((element) => {
    if (str.length != 0) {
      str = str + ", " + element;
    } else {
      str = str + element;
    }
  });

  let WantedMBTI = document.getElementById("WantedMBTI");
  WantedMBTI.value = str;
}

function booleanButton(name, num) {
  let current, other;
  let element = document.getElementById(name);
  if (num == 0) {
    current = document.getElementById(name + "Button0");
    other = document.getElementById(name + "Button1");
    element.value = "true";
  } else {
    current = document.getElementById(name + "Button1");
    other = document.getElementById(name + "Button0");
    element.value = "false";
  }

  current.className = "Button_on";
  other.className = "Button_off";
}
