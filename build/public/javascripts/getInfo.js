"use strict";

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

var MBTI_List = [];

function WantedMBTIButton(num) {
  var current = document.getElementById("WantedMBTI" + num);
  num = parseInt(num);

  if (current.className == "MBTIButton_on") {
    current.className = "MBTIButton_off";
    var index = MBTI_List.findIndex(num);
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
  var WantedMBTI = document.getElementById("WantedMBTI");
  WantedMBTI.value = MBTI_List.join(",");
}

var selectedMBTI = null;

function MBTIButton(num) {
  var current = document.getElementById("MBTI" + num);

  if (selectedMBTI) {
    document.getElementById("MBTI" + selectedMBTI).className = "MBTIButton_off";
  }

  current.className = "MBTIButton_on";
  selectedMBTI = num;
  var OwnMBTI = document.getElementById("OwnMBTI");
  OwnMBTI.value = parseInt(num);
}

function booleanButton(name, num) {
  var current, other;
  var element = document.getElementById(name);

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
  var current, other;
  var element = document.getElementById("KoM");

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

var FieldList = ["강남구", "서초구", "마포구", "동대문구", "성남시", "수원시", "용인시", "고양시", "인천", "대전", "강릉", "전주", "광주광역시", "대구", "부산"];
var selectedField = [];

function fieldSelectFunction() {
  var selection = document.getElementById("fieldSelect").value;

  if (selectedField.indexOf(parseInt(selection)) !== -1 || selectedField.length > 2 || selection == "default") {
    var _defaultOption = document.getElementById("fieldDefaultOption");

    _defaultOption.selected = true;
    return;
  }

  var input = document.getElementById("fieldInput");
  var block = document.createElement("span");
  block.className = "selection";
  block.id = "Field" + selection;
  var content = document.createElement("span");
  content.innerHTML = FieldList[selection];
  var cancel = document.createElement("input");
  cancel.type = "button";
  cancel.value = "X";
  cancel.addEventListener("click", function () {
    var block = document.getElementById("Field" + selection);
    var parent = document.getElementById("fieldInput");
    parent.removeChild(block);
    var Field = document.getElementById("Field");
    var index = selectedField.indexOf(parseInt(selection));
    selectedField.splice(index, 1);
    Field.value = selectedField;
  });
  block.appendChild(content);
  block.appendChild(cancel);
  input.appendChild(block);
  selectedField.push(parseInt(selection));
  var Field = document.getElementById("Field");
  selectedField.sort(function (a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });
  Field.value = selectedField.join(",");
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

function synchronizing() {
  var Gender = document.getElementById("Gender").value;
  var Field = document.getElementById("Field").value.split(",").map(function (element) {
    return "".concat(element);
  });
  var KoM = document.getElementById("KoM").value;
  var OwnMBTI = document.getElementById("OwnMBTI").value;
  var WantedMBTI = document.getElementById("WantedMBTI").value.split(",").map(function (element) {
    return "".concat(element);
  });
  var Major = document.getElementById("Major").value;
  var MilitaryService = document.getElementById("MilitaryService").value;
  var Smoker = document.getElementById("Smoker").value;
  var SameGender = document.getElementById("SameGender").value;
  var SameMajor = document.getElementById("SameMajor").value;
  var O_MilitaryService = document.getElementById("O_MilitaryService").value;
  var O_Smoker = document.getElementById("O_Smoker").value;
  genderButton(Gender);
  Field.forEach(function (element) {
    synchronizeField(element);
  });
  KoMButton(KoM);
  MBTIButton(OwnMBTI);
  WantedMBTI.forEach(function (element) {
    WantedMBTIButton(element);
  });
  synchronizeMajor(Major);
  synchronizeBooleanButton("MilitaryService", MilitaryService);
  synchronizeBooleanButton("Smoker", Smoker);
  synchronizeBooleanButton("SameGender", SameGender);
  synchronizeBooleanButton("SameMajor", SameMajor);
  synchronizeBooleanButton("O_MilitaryService", O_MilitaryService);
  synchronizeBooleanButton("O_Smoker", O_Smoker);
}

function synchronizeField(Field) {
  var selection = Field;
  var input = document.getElementById("fieldInput");
  var block = document.createElement("span");
  block.className = "selection";
  block.id = "Field" + selection;
  var content = document.createElement("span");
  content.innerHTML = FieldList[selection];
  var cancel = document.createElement("input");
  cancel.type = "button";
  cancel.value = "X";
  cancel.addEventListener("click", function () {
    var block = document.getElementById("Field" + selection);
    var parent = document.getElementById("fieldInput");
    parent.removeChild(block);
    var Field = document.getElementById("Field");
    var index = selectedField.indexOf(parseInt(selection));
    selectedField.splice(index, 1);
    Field.value = selectedField;
  });
  block.appendChild(content);
  block.appendChild(cancel);
  input.appendChild(block);
}

function synchronizeMajor(Major) {
  var selection = Major;
  var input = document.getElementById("majorInput");
  input.innerHTML = "";
  var block = document.createElement("span");
  block.className = "selection";
  var content = document.createElement("span");
  content.innerHTML = selection;
  block.appendChild(content);
  input.appendChild(block);
}

function synchronizeBooleanButton(name, num) {
  var current, other;
  var element = document.getElementById(name);

  if (num == "true") {
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