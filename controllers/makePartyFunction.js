import party from "../models/party";

export const groupMaking = async (request, response) => {
  try {
    for (let gender = 0; gender < 2; gender++) {
      for (let field = 0; field < 15; field++) {
        const oneManParty = await party.find({
          Gender: gender,
          currentMember: 1,
          Field: field,
        });

        const twoManParty = await party.find({
          Gender: gender,
          currentMember: 2,
          Field: field,
        });

        // 2인 파티에 1인 추가
        for (let i = 0; i < oneManParty.length; i++) {
          for (let j = 0; j < twoManParty.length; j++) {
            if (oneManParty[i].Field == twoManParty[j].Field) {
              await party.updateOne(
                { code: twoManParty[j].code },
                {
                  thirdStudent_Name: oneManParty[i].Name,
                  thirdStudent_STnumber: oneManParty[i].STnumber,
                  thirdStudent_Major: oneManParty[i].Major,
                  thirdStudent_instagramID: oneManParty[i].instagramID,
                  thirdStudent_kakaoID: oneManParty[i].kakaoID,
                  currentMember: 3,
                }
              );
              await party.deleteOne({ STnumber: oneManParty[i].STnumber });
              twoManParty.splice(j, 1);
              oneManParty.splice(i, 1);
              i--;
              continue;
            }
          }
        }
        // 1인 파티끼리 병합
        for (let i = 0; i < oneManParty.length; i++) {}
      }
    }
  } catch (error) {
    console.log(error);
  }
};
