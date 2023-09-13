import{j as e,S as a}from"./index-3486abdc.js";import{V as i}from"./antd-3342c5aa.js";import"./lodash-6114c6d4.js";import"./chance-d5bce0ad.js";const o=`
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
`,b=()=>e("div",{className:"shadow-md dark:shadow-stone-100 rounded-lg overflow-hidden flex items-end justify-center bg-white py-4",children:e(a,{msc:o,onClick:async t=>{await i.info(t)}})});export{b as default};
