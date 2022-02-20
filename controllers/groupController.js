import { request, response } from "express";
import party from "../models/party";

export const groupMatching = async (request, response) => {
  try {
    // 2인, 3인, 4인 매칭
    for (let member = 2; member < 5; member++) {
      // 지역
      for (let field = 0; field < 15; field++) {
        // 남성 파티 배열
        const Men = await party.find({
          Gender: 0,
          currentMember: member,
          Field: field,
        });
        // 여성 파티 배열
        const Women = await party.find({
          Gender: 1,
          currentMember: member,
          Field: field,
        });

        // 같은 과가 아니라는 조건 하에 매칭
        for (let i = 0; i < Men.length; i++) {
          for (let j = 0; j < Women.length; j++) {
            if (Men[i].Major !== Women[j].Major) {
              await party.updateOne(
                { code: Men[i].code },
                { isMatched: true, matchedPartyCode: Women[j].code }
              );
              await party.updateOne(
                { code: Women[j].code },
                { isMatched: true, matchedPartyCode: Men[i].code }
              );

              Men.splice(i, 1);
              Women.splice(j, 1);
              i--;
              j--;
            }
          }
        }
      }
    }
    return response.render("groupMain");
  } catch (error) {
    console.log(error);
  }
};

export const getinfo = async (request, response) => {
  return response.render("groupGetinfo");
};

export const getinfo_process = async (request, response) => {
  try {
    const {
      STnumber,
      Name,
      Gender,
      Major,
      Field,
      instagramID,
      kakaoID,
      secondStudent_STnumber,
      secondStudent_Name,
      secondStudent_instagramID,
      secondStudent_kakaoID,
      thirdStudent_STnumber,
      thirdStudent_Name,
      thirdStudent_instagramID,
      thirdStudent_kakaoID,
      forthStudent_STnumber,
      forthStudent_Name,
      forthStudent_instagramID,
      forthStudent_kakaoID,
      currentMember,
    } = request.body;

    const info = new party({
      code: STnumber,
      STnumber: STnumber,
      Name: Name,
      Gender: Gender,
      Major: Major,
      Field: Field,
      instagramID: instagramID,
      kakaoID: kakaoID,
      secondStudent_STnumber: secondStudent_STnumber,
      secondStudent_Name: secondStudent_Name,
      secondStudent_instagramID: secondStudent_instagramID,
      secondStudent_kakaoID: secondStudent_kakaoID,
      thirdStudent_STnumber: thirdStudent_STnumber,
      thirdStudent_Name: thirdStudent_Name,
      thirdStudent_instagramID: thirdStudent_instagramID,
      thirdStudent_kakaoID: thirdStudent_kakaoID,
      forthStudent_STnumber: forthStudent_STnumber,
      forthStudent_Name: forthStudent_Name,
      forthStudent_instagramID: forthStudent_instagramID,
      forthStudent_kakaoID: forthStudent_kakaoID,
      currentMember: currentMember,
    });

    await info.save();
    return response.render("groupMain");
  } catch (error) {
    console.log(error);
  }
};

export const groupInfos = async (request, response) => {
  const infos = await party.find({});
  return response.render("groupInfos", { infos });
};

export const groupMain = async (request, response) => {
  return response.render("groupMain");
};

export const groupDelete = async (request, response) => {
  return response.render("groupDelete");
};

export const groupDelete_process = async (request, response) => {
  const { code } = request.body;
  console.log(await party.find({ code: code }));
  await party.deleteOne({ code: code }, (error) => {
    if (error) console.log(error);
  });

  return response.render("groupMain");
};
