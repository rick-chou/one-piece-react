import{j as t,S as a}from"./index-Dt7Lsx6p.js";import{p as i}from"./antd-DGkp10QV.js";import"./lodash-BVSlK2Pl.js";import"./prettier-DJQX7j1f.js";import"./chance-DnaHbaGl.js";const o=`
msc {
  hscale="1.1",
  width=${screen.availWidth*.35},
  wordwraparcs=true;

  Client [url="Client"],
  WebFE [url="WebFE"],
  RA [url="RA"],
  SA [url="SA"],
  VA [url="Client"];

  Client -> WebFE [label="authorizationRequest", url="this is a authorizationRequest"];
  WebFE rbox WebFE [label="look up authorization based on nonce"];
  WebFE rbox WebFE [label="verify authorization signature"];
  WebFE -> RA [label="UpdateAuthorization (Authorization)"];
  RA rbox RA [label="add responses to authorization"];
  RA -> SA [label="Update(Authorization.ID, Authorization)"];
  WebFE -> VA [label="UpdateValidations (Authorization)"];
  WebFE -> Client [label="defer (authorizationID)"];
  VA -> SA [label="Update (Authorization.ID, Authorization)"];
  VA -> RA [label="OnValidationUpdate (Authorization)"];
  RA rbox RA [label="check that validation sufficient"];
  RA rbox RA [label="finalize authorization"];
  RA -> SA [label="Update (Authorization.ID, Authorization)"];
  RA -> WebFE [label="OnAuthorizationUpdate(Authorization)"];
  Client -> WebFE [label="statusRequest"];
  WebFE >> Client [label="error / authorization"];
}
`,s=()=>t("div",{className:"flex w-full items-end justify-center overflow-hidden rounded-lg bg-white py-2 shadow-md dark:shadow-stone-100",children:t(a,{msc:o,onClick:async e=>{await i.info(e)}})});export{s as default};
