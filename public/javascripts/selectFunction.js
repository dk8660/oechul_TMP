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
  Field.value = selectedField;

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
  block.id = "Major" + selection.value;

  let content = document.createElement("span");
  content.innerHTML = selection.value;

  block.appendChild(content);

  input.appendChild(block);

  let Major = document.getElementById("Major");
  Major.value = selection.value;

  let defaultOption = document.getElementById("majorDefaultOption");
  defaultOption.selected = true;
}
