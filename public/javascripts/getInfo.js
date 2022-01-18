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

let MBTI_List = [];

function WantedMBTIButton(num) {
  let current = document.getElementById("WantedMBTI" + num);

  num = parseInt(num);
  if (current.className == "MBTIButton_on") {
    current.className = "MBTIButton_off";
    let index = MBTI_List.findIndex(num);
    MBTI_List.splice(index, 1);
  } else {
    current.className = "MBTIButton_on";
    MBTI_List.push(num);
  }

  MBTI_List.sort(function (a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });
  // let str = "";
  // MBTI_List.forEach((element) => {
  //   if (str.length != 0) {
  //     str = str + ", " + element;
  //   } else {
  //     str = str + element;
  //   }
  // });

  // let WantedMBTI = document.getElementById("WantedMBTI");
  // WantedMBTI.value = str;

  let WantedMBTI = document.getElementById("WantedMBTI");
  WantedMBTI.value = MBTI_List;
}

let selectedMBTI = null;

function MBTIButton(num) {
  let current = document.getElementById("MBTI" + num);

  if (selectedMBTI) {
    document.getElementById("MBTI" + selectedMBTI).className = "MBTIButton_off";
  }

  current.className = "MBTIButton_on";
  selectedMBTI = num;

  let OwnMBTI = document.getElementById("OwnMBTI");
  OwnMBTI.value = parseInt(num);
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

function KoMButton(num) {
  let current, other;
  let element = document.getElementById("KoM");
  if (num == 0) {
    current = document.getElementById("kind" + "Button0");
    other = document.getElementById("kind" + "Button1");
    element.value = "연인";
  } else {
    current = document.getElementById("kind" + "Button1");
    other = document.getElementById("kind" + "Button0");
    element.value = "친구";
  }

  current.className = "Button_on";
  other.className = "Button_off";
}
