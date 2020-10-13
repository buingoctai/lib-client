# lib-client

Using to call websocket server

## Usage:

- Install package with npm i.
- Import function doRunBuild.
- Pass param object to function.

## Example

1. With build branch,
   Object includes props:

- buildType: buildBranch
- buildInfor includes buildBranch: v101

2. With build tag version,
   Object includes props:

- buildType: buildTag,
- buildInfor includes buildTagVersion: v101, buildTagType:"new feature"

doRunBuild({ buildType: "buildBranch",
buildInfor: { buildBranch: "v101" },})

## Get result

- doRunBuild function return a promise.
- Get download url with then.
- Get error in connecting to websocker server or error in build processing with catch.
