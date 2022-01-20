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

  let WantedMBTI = document.getElementById("WantedMBTI");
  WantedMBTI.value = MBTI_List.join(",");
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
let selectedField = [];

function fieldSelectFunction() {
  let selection = document.getElementById("fieldSelect").value;
  if (
    selectedField.indexOf(parseInt(selection)) !== -1 ||
    selectedField.length > 2 ||
    selection == "default"
  ) {
    let defaultOption = document.getElementById("fieldDefaultOption");
    defaultOption.selected = true;
    return;
  }

  let input = document.getElementById("fieldInput");

  let block = document.createElement("span");
  block.className = "selection";
  block.id = "Field" + selection;

  let content = document.createElement("span");
  content.innerHTML = FieldList[selection];

  let cancel = document.createElement("input");
  cancel.type = "button";
  cancel.value = "X";
  cancel.addEventListener("click", () => {
    let block = document.getElementById("Field" + selection);

    let parent = document.getElementById("fieldInput");
    parent.removeChild(block);

    let Field = document.getElementById("Field");
    let index = selectedField.indexOf(parseInt(selection));
    selectedField.splice(index, 1);
    Field.value = selectedField;
  });

  block.appendChild(content);
  block.appendChild(cancel);

  input.appendChild(block);

  selectedField.push(parseInt(selection));
  let Field = document.getElementById("Field");
  selectedField.sort(function (a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });
  Field.value = selectedField.join(",");

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

function synchronizing() {
  let Gender = document.getElementById("Gender").value;
  let Field = document
    .getElementById("Field")
    .value.split(",")
    .map((element) => `${element}`);
  let KoM = document.getElementById("KoM").value;
  let OwnMBTI = document.getElementById("OwnMBTI").value;
  let WantedMBTI = document
    .getElementById("WantedMBTI")
    .value.split(",")
    .map((element) => `${element}`);
  let Major = document.getElementById("Major").value;
  let MilitaryService = document.getElementById("MilitaryService").value;
  let Smoker = document.getElementById("Smoker").value;
  let SameGender = document.getElementById("SameGender").value;
  let SameMajor = document.getElementById("SameMajor").value;
  let O_MilitaryService = document.getElementById("O_MilitaryService").value;
  let O_Smoker = document.getElementById("O_Smoker").value;

  genderButton(Gender);
  Field.forEach((element) => {
    synchronizeField(element);
  });
  KoMButton(KoM);
  MBTIButton(OwnMBTI);
  WantedMBTI.forEach((element) => {
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
  let selection = Field;
  let input = document.getElementById("fieldInput");

  let block = document.createElement("span");
  block.className = "selection";
  block.id = "Field" + selection;

  let content = document.createElement("span");
  content.innerHTML = FieldList[selection];

  let cancel = document.createElement("input");
  cancel.type = "button";
  cancel.value = "X";
  cancel.addEventListener("click", () => {
    let block = document.getElementById("Field" + selection);

    let parent = document.getElementById("fieldInput");
    parent.removeChild(block);

    let Field = document.getElementById("Field");
    let index = selectedField.indexOf(parseInt(selection));
    selectedField.splice(index, 1);
    Field.value = selectedField;
  });

  block.appendChild(content);
  block.appendChild(cancel);

  input.appendChild(block);
}

function synchronizeMajor(Major) {
  let selection = Major;
  let input = document.getElementById("majorInput");
  input.innerHTML = "";

  let block = document.createElement("span");
  block.className = "selection";

  let content = document.createElement("span");
  content.innerHTML = selection;

  block.appendChild(content);

  input.appendChild(block);
}

function synchronizeBooleanButton(name, num) {
  let current, other;
  let element = document.getElementById(name);
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