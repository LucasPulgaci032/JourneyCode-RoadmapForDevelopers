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

    objArr: {
      code: objArrJS,
    },
    operators: {
      code: operatorsJS,
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
    objArr: {
      code: objArrPy,
    },
    operators: {
      code: operatorsPy,
    },
    ctrlEstructures: {
      code: "abc",
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
    objArr: {
      code: objArrJava,
    },
    operators: {
      code: operatorsJava,
    },
    ctrlEstructures: {
      code: "abc",
    },
    functions: {
      code: "abc",
    },
  },
];

