import * as React from "react";
import Bar from "../Bar";

export default (
  <Bar uxpId="bar"
  data={[
    {
      "country": "AD",
      "hot dog": 155,
      "hot dogColor": "hsl(239, 70%, 50%)",
      "burger": 66,
      "burgerColor": "hsl(113, 70%, 50%)",
      "sandwich": 73,
      "sandwichColor": "hsl(202, 70%, 50%)",
      "kebab": 43,
      "kebabColor": "hsl(358, 70%, 50%)",
      "fries": 101,
      "friesColor": "hsl(278, 70%, 50%)",
      "donut": 63,
      "donutColor": "hsl(2, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 163,
      "hot dogColor": "hsl(306, 70%, 50%)",
      "burger": 50,
      "burgerColor": "hsl(296, 70%, 50%)",
      "sandwich": 154,
      "sandwichColor": "hsl(62, 70%, 50%)",
      "kebab": 5,
      "kebabColor": "hsl(138, 70%, 50%)",
      "fries": 87,
      "friesColor": "hsl(295, 70%, 50%)",
      "donut": 103,
      "donutColor": "hsl(309, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 59,
      "hot dogColor": "hsl(264, 70%, 50%)",
      "burger": 160,
      "burgerColor": "hsl(273, 70%, 50%)",
      "sandwich": 84,
      "sandwichColor": "hsl(299, 70%, 50%)",
      "kebab": 153,
      "kebabColor": "hsl(242, 70%, 50%)",
      "fries": 74,
      "friesColor": "hsl(326, 70%, 50%)",
      "donut": 198,
      "donutColor": "hsl(294, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 137,
      "hot dogColor": "hsl(19, 70%, 50%)",
      "burger": 83,
      "burgerColor": "hsl(12, 70%, 50%)",
      "sandwich": 57,
      "sandwichColor": "hsl(194, 70%, 50%)",
      "kebab": 72,
      "kebabColor": "hsl(286, 70%, 50%)",
      "fries": 96,
      "friesColor": "hsl(340, 70%, 50%)",
      "donut": 49,
      "donutColor": "hsl(193, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 199,
      "hot dogColor": "hsl(256, 70%, 50%)",
      "burger": 121,
      "burgerColor": "hsl(53, 70%, 50%)",
      "sandwich": 98,
      "sandwichColor": "hsl(321, 70%, 50%)",
      "kebab": 74,
      "kebabColor": "hsl(239, 70%, 50%)",
      "fries": 39,
      "friesColor": "hsl(291, 70%, 50%)",
      "donut": 172,
      "donutColor": "hsl(178, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 184,
      "hot dogColor": "hsl(305, 70%, 50%)",
      "burger": 109,
      "burgerColor": "hsl(182, 70%, 50%)",
      "sandwich": 175,
      "sandwichColor": "hsl(168, 70%, 50%)",
      "kebab": 143,
      "kebabColor": "hsl(14, 70%, 50%)",
      "fries": 194,
      "friesColor": "hsl(136, 70%, 50%)",
      "donut": 101,
      "donutColor": "hsl(26, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 4,
      "hot dogColor": "hsl(147, 70%, 50%)",
      "burger": 40,
      "burgerColor": "hsl(70, 70%, 50%)",
      "sandwich": 112,
      "sandwichColor": "hsl(207, 70%, 50%)",
      "kebab": 49,
      "kebabColor": "hsl(152, 70%, 50%)",
      "fries": 46,
      "friesColor": "hsl(33, 70%, 50%)",
      "donut": 11,
      "donutColor": "hsl(350, 70%, 50%)"
    }
  ]}
  keys={[
    'hot dog',
    'burger',
    'sandwich',
    'kebab',
    'fries',
    'donut'
    ]}
  indexBy="country"
  margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
  padding={0.3}
  width={500}
  height={500}

  />
);