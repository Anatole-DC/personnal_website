module.exports = {
  branches: [
    "+([0-9])?(.{+([0-9]),x}).x",
    "master",
    "next",
    "next-major",
    { name: "beta", prerelease: true },
    { name: "alpha", prerelease: true },
  ],
  plugins: [
    [
      "semantic-release-gitmoji",
      {
        releaseRules: {
          major: [":boom:"],
          minor: [":sparkles:"],
          patch: [
            ":bug:",
            ":memo:",
            ":ambulance:",
            ":lipstick:",
            ":lock:",
            ":zap:",
            ":apple:",
            ":penguin:",
            ":checkered_flag:",
            ":robot:",
            ":green_apple:",
            ":chart_with_upwards_trend:",
            ":globe_with_meridians:",
            ":alien:",
            ":wheelchair:",
            ":loud_sound:",
            ":mute:",
            ":mag:",
            ":children_crossing:",
            ":speech_balloon:",
            ":iphone:",
            ":pencil2:",
            ":bento:",
            ":fire:",
          ],
        },
      },
    ],
    "@semantic-release/github",
    [
      "@semantic-release/git",
      {
        assets: ["package.json"],
        message:
          ":bookmark: ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};
