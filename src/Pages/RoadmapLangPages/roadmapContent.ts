import {
  varAndConstsJS,
  dataTypesCodeJS,
  objArrJS,
  operatorsJS,
} from "./StaticCodeContent/JSCodeContent";

import {
  varAndConstsPy,
  dataTypesCodePy,
  objArrPy,
  operatorsPy,
  ctrlEstructuresPy,
  loopingsPy,
} from "./StaticCodeContent/PyCodeContent";

import {
  varAndConstsJava,
  dataTypesCodeJava,
  operatorsJava,
  objArrJava,
} from "./StaticCodeContent/JavaCodeContent";

type CodeBlock = {
  code: string;
};

type RoadmapItem = {
  language: string;
  varAndConsts: CodeBlock;
  dataTypes: CodeBlock;
  operators: CodeBlock;
  objArr?: CodeBlock;
  loopings: CodeBlock;
  ctrlEstructures: CodeBlock;
  functions: CodeBlock;
};

export const roadmapContent: RoadmapItem[] = [
  {
    language: "JavaScript",
    varAndConsts: {
      code: varAndConstsJS,
    },
    dataTypes: {
      code: dataTypesCodeJS,
    },
    operators: {
      code: operatorsJS,
    },
    objArr: {
      code: objArrJS,
    },
    loopings :{
      code : "abc"
    },
    ctrlEstructures: {
      code: "abc",
    },
    functions: {
      code: "abc",
    },
  },
  {
    language: "Python",
    varAndConsts: {
      code: varAndConstsPy,
    },
    dataTypes: {
      code: dataTypesCodePy,
    },
    operators: {
      code: operatorsPy,
    },
    objArr: {
      code: objArrPy,
    },
     loopings :{
      code : loopingsPy
    },
    ctrlEstructures: {
      code: ctrlEstructuresPy
    },

    functions: {
      code: "abc",
    },
  },
  {
    language: "Java",
    varAndConsts: {
      code: varAndConstsJava,
    },
    dataTypes: {
      code: dataTypesCodeJava,
    },
    operators: {
      code: operatorsJava,
    },
    objArr: {
      code: objArrJava,
    },
     loopings :{
      code : "abc"
    },
    ctrlEstructures: {
      code: "abc",
    },
    functions: {
      code: "abc",
    },
  },
];

