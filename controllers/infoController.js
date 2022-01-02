import StudentInfo from "../models/Student_Info";

export const main = async (request, response) => {
  return response.render("main");
};

export const home = async (request, response) => {
  const infos = await StudentInfo.find({});
  return response.render("home", { infos });
};

export const getinfo = async (request, response) => {
  return response.render("getinfo");
};

export const getinfo_process = async (request, response) => {
  const {
    STnumber,
    Name,
    Gender,
    Field,
    instagramID,
    kakaoID,
    KoM,
    OwnMBTI,
    WantedMBTI,
    Major,
    MilitaryService,
    Smoker,
    Fre_Drinking,
    SameGender,
    SameMajor,
    O_MilitaryService,
    O_Smoker,
  } = request.body;
  const info = new StudentInfo({
    _id: Number(STnumber),
    STnumber: STnumber,
    Name: Name,
    Gender: Gender,
    Field: Field.split(",").map((word) => `${word}`),
    instagramID: instagramID,
    kakaoID: kakaoID,
    KoM: KoM,
    OwnMBTI: OwnMBTI,
    WantedMBTI: WantedMBTI.split(",").map((word) => `${word}`),
    Major: Major,
    MilitaryService: MilitaryService,
    Smoker: Smoker,
    Fre_Drinking: Fre_Drinking,
    SameGender: SameGender,
    SameMajor: SameMajor,
    O_MilitaryService: O_MilitaryService,
    O_Smoker: O_Smoker,
  });
  await info.save();
  return response.redirect(`/`);
};

export const Delete = async (request, response) => {
  let msg = "";
  return response.render("delete", { msg });
};

export const delete_process = async (request, response) => {
  const { STnumber, kakaoID } = request.body;
  let process = true;
  await StudentInfo.findById(Number(STnumber), (error, info) => {
    if (!info) {
      let msg = "존재하지 않는 학번입니다.";
      process = false;
      return response.render("delete", { msg });
    }
    if (info.kakaoID !== kakaoID) {
      let msg = "일치하지 않는 카카오 ID 입니다.";
      process = false;
      return response.render("delete", { msg });
    }
  });
  if (process) {
    await StudentInfo.deleteOne({ STnumber: STnumber }, (err) => {
      if (err) console.log(err);
    });
    return response.redirect(`/`);
  }
};

export const update = async (request, response) => {
  let msg = "";
  return response.render("update", { msg });
};

export const update_process = async (request, response) => {
  const { STnumber, kakaoID } = request.body;
  await StudentInfo.findById(Number(STnumber), (error, info) => {
    if (!info) {
      let msg = "존재하지 않는 학번입니다.";
      return response.render("update", { msg });
    }
    if (info.kakaoID !== kakaoID) {
      let msg = "일치하지 않는 카카오 ID 입니다.";
      return response.render("update", { msg });
    }
    return response.render("edit", { info });
  });
};

export const edit_process = async (request, response) => {
  const {
    STnumber,
    Name,
    Gender,
    Field,
    instagramID,
    kakaoID,
    KoM,
    OwnMBTI,
    WantedMBTI,
    Major,
    MilitaryService,
    Smoker,
    Fre_Drinking,
    SameGender,
    SameMajor,
    O_MilitaryService,
    O_Smoker,
    MatchedPeople,
    MatchedScore,
    isMatched,
    selectedPerson,
  } = request.body;
  await StudentInfo.findById(Number(STnumber), (error, info) => {
    (info._id = Number(STnumber)),
      (info.STnumber = STnumber),
      (info.Name = Name),
      (info.Gender = Gender),
      (info.Field = Field.split(",").map((word) => `${word}`)),
      (info.instagramID = instagramID),
      (info.kakaoID = kakaoID),
      (info.KoM = KoM),
      (info.OwnMBTI = OwnMBTI),
      (info.WantedMBTI = WantedMBTI.split(",").map((word) => `${word}`)),
      (info.Major = Major),
      (info.MilitaryService = MilitaryService),
      (info.Smoker = Smoker),
      (info.Fre_Drinking = Fre_Drinking),
      (info.SameGender = SameGender),
      (info.SameMajor = SameMajor),
      (info.O_MilitaryService = O_MilitaryService),
      (info.O_Smoker = O_Smoker),
      (info.MatchedPeople = MatchedPeople),
      (info.MatchedScore = MatchedScore),
      (info.isMatched = isMatched),
      (info.selectedPerson = selectedPerson);

    info.save();
  });
  return response.redirect(`/`);
};

export const reference = async (request, response) => {
  let msg = "";
  return response.render("reference", { msg });
};

export const result = async (request, response) => {
  const { STnumber, kakaoID } = request.body;
  let SP = null;
  await StudentInfo.findOne({ STnumber: STnumber }, (err, person) => {
    if (err) console.log(err);
    if (!person) {
      let msg = "존재하지 않는 학번입니다.";
      return response.render("reference", { msg });
    }
    if (person.kakaoID != kakaoID) {
      let msg = "일치하지 않는 카카오 ID 입니다.";
      return response.render("reference", { msg });
    }
    if (person.isMatched === true) {
      SP = person.selectedPerson;
    }
  });
  if (SP !== null) {
    await StudentInfo.findOne({ STnumber: SP }, (error, info) => {
      if (!info) {
        return response.render("sorry");
      }
      return response.render("result", { info });
    });
  } else {
    return response.render("sorry");
  }
};

export const watch = async (request, response) => {
  const STnumber = request.url.slice(6);
  await StudentInfo.findById(Number(STnumber), (error, info) => {
    return response.render("detail", { info });
  });
};
