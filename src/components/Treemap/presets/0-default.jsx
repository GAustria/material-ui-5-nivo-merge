import * as React from "react";
import Bar from "../Treemap";

export default (
  <Bar uxpId="bar"
  data={
    {
      "name": "nivo",
      "color": "hsl(13, 70%, 50%)",
      "children": [
        {
          "name": "viz",
          "color": "hsl(30, 70%, 50%)",
          "children": [
            {
              "name": "stack",
              "color": "hsl(203, 70%, 50%)",
              "children": [
                {
                  "name": "cchart",
                  "color": "hsl(9, 70%, 50%)",
                  "loc": 184857
                },
                {
                  "name": "xAxis",
                  "color": "hsl(60, 70%, 50%)",
                  "loc": 23042
                },
                {
                  "name": "yAxis",
                  "color": "hsl(263, 70%, 50%)",
                  "loc": 163992
                },
                {
                  "name": "layers",
                  "color": "hsl(194, 70%, 50%)",
                  "loc": 149535
                }
              ]
            },
            {
              "name": "ppie",
              "color": "hsl(144, 70%, 50%)",
              "children": [
                {
                  "name": "chart",
                  "color": "hsl(133, 70%, 50%)",
                  "children": [
                    {
                      "name": "pie",
                      "color": "hsl(296, 70%, 50%)",
                      "children": [
                        {
                          "name": "outline",
                          "color": "hsl(257, 70%, 50%)",
                          "loc": 123128
                        },
                        {
                          "name": "slices",
                          "color": "hsl(267, 70%, 50%)",
                          "loc": 60048
                        },
                        {
                          "name": "bbox",
                          "color": "hsl(92, 70%, 50%)",
                          "loc": 195740
                        }
                      ]
                    },
                    {
                      "name": "donut",
                      "color": "hsl(320, 70%, 50%)",
                      "loc": 46148
                    },
                    {
                      "name": "gauge",
                      "color": "hsl(23, 70%, 50%)",
                      "loc": 25561
                    }
                  ]
                },
                {
                  "name": "legends",
                  "color": "hsl(35, 70%, 50%)",
                  "loc": 186309
                }
              ]
            }
          ]
        },
        {
          "name": "colors",
          "color": "hsl(82, 70%, 50%)",
          "children": [
            {
              "name": "rgb",
              "color": "hsl(221, 70%, 50%)",
              "loc": 19511
            },
            {
              "name": "hsl",
              "color": "hsl(325, 70%, 50%)",
              "loc": 108167
            }
          ]
        },
        {
          "name": "utils",
          "color": "hsl(344, 70%, 50%)",
          "children": [
            {
              "name": "randomize",
              "color": "hsl(285, 70%, 50%)",
              "loc": 144228
            },
            {
              "name": "resetClock",
              "color": "hsl(239, 70%, 50%)",
              "loc": 11379
            },
            {
              "name": "noop",
              "color": "hsl(166, 70%, 50%)",
              "loc": 68132
            },
            {
              "name": "tick",
              "color": "hsl(344, 70%, 50%)",
              "loc": 95981
            },
            {
              "name": "forceGC",
              "color": "hsl(333, 70%, 50%)",
              "loc": 93135
            },
            {
              "name": "stackTrace",
              "color": "hsl(47, 70%, 50%)",
              "loc": 124085
            },
            {
              "name": "dbg",
              "color": "hsl(239, 70%, 50%)",
              "loc": 163183
            }
          ]
        },
        {
          "name": "generators",
          "color": "hsl(201, 70%, 50%)",
          "children": [
            {
              "name": "address",
              "color": "hsl(65, 70%, 50%)",
              "loc": 85893
            },
            {
              "name": "city",
              "color": "hsl(96, 70%, 50%)",
              "loc": 49816
            },
            {
              "name": "animal",
              "color": "hsl(121, 70%, 50%)",
              "loc": 76379
            },
            {
              "name": "movie",
              "color": "hsl(24, 70%, 50%)",
              "loc": 141350
            },
            {
              "name": "user",
              "color": "hsl(168, 70%, 50%)",
              "loc": 68740
            }
          ]
        },
        {
          "name": "set",
          "color": "hsl(41, 70%, 50%)",
          "children": [
            {
              "name": "clone",
              "color": "hsl(91, 70%, 50%)",
              "loc": 173073
            },
            {
              "name": "intersect",
              "color": "hsl(114, 70%, 50%)",
              "loc": 22588
            },
            {
              "name": "merge",
              "color": "hsl(84, 70%, 50%)",
              "loc": 31942
            },
            {
              "name": "reverse",
              "color": "hsl(37, 70%, 50%)",
              "loc": 124742
            },
            {
              "name": "toArray",
              "color": "hsl(131, 70%, 50%)",
              "loc": 133269
            },
            {
              "name": "toObject",
              "color": "hsl(158, 70%, 50%)",
              "loc": 169322
            },
            {
              "name": "fromCSV",
              "color": "hsl(71, 70%, 50%)",
              "loc": 183342
            },
            {
              "name": "slice",
              "color": "hsl(273, 70%, 50%)",
              "loc": 163862
            },
            {
              "name": "append",
              "color": "hsl(172, 70%, 50%)",
              "loc": 104143
            },
            {
              "name": "prepend",
              "color": "hsl(347, 70%, 50%)",
              "loc": 837
            },
            {
              "name": "shuffle",
              "color": "hsl(96, 70%, 50%)",
              "loc": 57923
            },
            {
              "name": "pick",
              "color": "hsl(300, 70%, 50%)",
              "loc": 166759
            },
            {
              "name": "plouc",
              "color": "hsl(16, 70%, 50%)",
              "loc": 92670
            }
          ]
        },
        {
          "name": "text",
          "color": "hsl(311, 70%, 50%)",
          "children": [
            {
              "name": "trim",
              "color": "hsl(43, 70%, 50%)",
              "loc": 156677
            },
            {
              "name": "slugify",
              "color": "hsl(134, 70%, 50%)",
              "loc": 18790
            },
            {
              "name": "snakeCase",
              "color": "hsl(198, 70%, 50%)",
              "loc": 170941
            },
            {
              "name": "camelCase",
              "color": "hsl(142, 70%, 50%)",
              "loc": 174467
            },
            {
              "name": "repeat",
              "color": "hsl(128, 70%, 50%)",
              "loc": 46485
            },
            {
              "name": "padLeft",
              "color": "hsl(168, 70%, 50%)",
              "loc": 156635
            },
            {
              "name": "padRight",
              "color": "hsl(60, 70%, 50%)",
              "loc": 93454
            },
            {
              "name": "sanitize",
              "color": "hsl(28, 70%, 50%)",
              "loc": 2082
            },
            {
              "name": "ploucify",
              "color": "hsl(360, 70%, 50%)",
              "loc": 140002
            }
          ]
        },
        {
          "name": "misc",
          "color": "hsl(149, 70%, 50%)",
          "children": [
            {
              "name": "greetings",
              "color": "hsl(296, 70%, 50%)",
              "children": [
                {
                  "name": "hey",
                  "color": "hsl(161, 70%, 50%)",
                  "loc": 142543
                },
                {
                  "name": "HOWDY",
                  "color": "hsl(38, 70%, 50%)",
                  "loc": 107751
                },
                {
                  "name": "aloha",
                  "color": "hsl(293, 70%, 50%)",
                  "loc": 175362
                },
                {
                  "name": "AHOY",
                  "color": "hsl(249, 70%, 50%)",
                  "loc": 146842
                }
              ]
            },
            {
              "name": "other",
              "color": "hsl(115, 70%, 50%)",
              "loc": 144762
            },
            {
              "name": "path",
              "color": "hsl(2, 70%, 50%)",
              "children": [
                {
                  "name": "pathA",
                  "color": "hsl(182, 70%, 50%)",
                  "loc": 71703
                },
                {
                  "name": "pathB",
                  "color": "hsl(185, 70%, 50%)",
                  "children": [
                    {
                      "name": "pathB1",
                      "color": "hsl(298, 70%, 50%)",
                      "loc": 116849
                    },
                    {
                      "name": "pathB2",
                      "color": "hsl(70, 70%, 50%)",
                      "loc": 23422
                    },
                    {
                      "name": "pathB3",
                      "color": "hsl(285, 70%, 50%)",
                      "loc": 189377
                    },
                    {
                      "name": "pathB4",
                      "color": "hsl(65, 70%, 50%)",
                      "loc": 81838
                    }
                  ]
                },
                {
                  "name": "pathC",
                  "color": "hsl(207, 70%, 50%)",
                  "children": [
                    {
                      "name": "pathC1",
                      "color": "hsl(234, 70%, 50%)",
                      "loc": 74861
                    },
                    {
                      "name": "pathC2",
                      "color": "hsl(272, 70%, 50%)",
                      "loc": 81192
                    },
                    {
                      "name": "pathC3",
                      "color": "hsl(264, 70%, 50%)",
                      "loc": 99995
                    },
                    {
                      "name": "pathC4",
                      "color": "hsl(307, 70%, 50%)",
                      "loc": 89529
                    },
                    {
                      "name": "pathC5",
                      "color": "hsl(336, 70%, 50%)",
                      "loc": 17314
                    },
                    {
                      "name": "pathC6",
                      "color": "hsl(48, 70%, 50%)",
                      "loc": 84810
                    },
                    {
                      "name": "pathC7",
                      "color": "hsl(230, 70%, 50%)",
                      "loc": 5145
                    },
                    {
                      "name": "pathC8",
                      "color": "hsl(32, 70%, 50%)",
                      "loc": 66256
                    },
                    {
                      "name": "pathC9",
                      "color": "hsl(15, 70%, 50%)",
                      "loc": 79205
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }

  }
  identity="name"
  value="loc"
  valueFormat=".02s"
  margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
  width={500}
  height={500}

  />
);