const callRunBuild = require("./index");

const params = {
  buildType: "buildBranch",
  buildInfor: { buildBranch: "v101" },
};

// const params = {
//   buildType: "buildTag",
//   buildInfor: { buildTagVersion: "V101", buildTagType: "new feature" },
// };
callRunBuild(params)
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
