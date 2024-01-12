import { MatchedColor } from "./types";

const red = {
  first: "#EB3C3C",
  second: "#E13A3A",
  third: "#D73838",
  fourth: "#C23333",
  fifth: "#982A2A",
};

const blue = {
  first: "#297AF3",
  second: "#2874E6",
  third: "#276ED8",
  fourth: "#2461BC",
  fifth: "#1E4885",
};

const green = {
  first: "#65DD61",
  second: "#61D45D",
  third: "#5CCA58",
  fourth: "#52B74E",
  fifth: "#3E913B",
};

const orange = {
  first: "#F35D1C",
  second: "#DD5120",
  third: "#C64423",
  fourth: "#AF3727",
  fifth: "#982A2A",
};

const thistle = {
  first: "#CDB4DB",
  second: "#FFC8DD",
  third: "#FFAFCC",
  fourth: "#BDE0FE",
  fifth: "#A2D2FF",
};

const skyblue = {
  first: "#8ECAE6",
  second: "#219EBC",
  third: "#023047",
  fourth: "#FFB703",
  fifth: "#FB8500",
};

const darkmossGreen = {
  first: "#606C38",
  second: "#283618",
  third: "#FEFAE0",
  fourth: "#DDA15E",
  fifth: "#BC6C25",
};

const colors: { [key: number]: MatchedColor } = {
  1: red,
  2: blue,
  3: green,
  4: orange,
  5: thistle,
  6: skyblue,
  7: darkmossGreen,
};

export default colors;
