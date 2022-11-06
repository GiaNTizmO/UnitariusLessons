import { tinyLogger } from "./helpers/extenstions.mjs";

//const { Map } = require("immutable");
import { Map } from "immutable";
import { dateWork } from "./dateWork.js";
import {
  allVariablesTypes,
  variablesBasicOperating,
  variablesAdvancedOperating,
  getValueFromItem,
  funcCallVar,
  Task6,
  objectInspector,
} from "./homeTask.js";
import { objectComparator } from "./microInspector.js";

function entryPoint() {
  tinyLogger("Executing task: get current date + 10 days:");
  tinyLogger(dateWork(), "dateWork");
  tinyLogger("Executing task: iterating variables types");
  allVariablesTypes();
  tinyLogger("Executing task: operators usage");
  variablesBasicOperating();
  tinyLogger("Executing task: operators usage with different variables types");
  variablesAdvancedOperating();
  tinyLogger("Executing task: getting primitive value from another function");
  tinyLogger(getValueFromItem("exampleString"), "primitiveGetter");
  tinyLogger(
    "Executing task: push function as argument and get function variable"
  );
  var funcdata = funcCallVar(Date);
  tinyLogger(`Typeof: ${funcdata}, Value: ${funcdata()}`, "Task №5");
  tinyLogger("Executing task №6");
  const constReturnedData = Task6();
  tinyLogger(constReturnedData);
  tinyLogger("Executing task №7.1 - ObjectInspecting");
  var myCar = new Object(); // paste from: https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects
  myCar.make = "Ford";
  myCar.model = "Mustang";
  myCar.year = 1969;
  objectInspector(myCar);
  tinyLogger("Executing task №7.2 - ObjectInspecting");
  function const_obj() {
    let people = {};
    people.name = "Alex";
    people.age = 21;
    people.descr = ["Описание", 1, { id: 123, arr: ["test", { isObj: true }] }];

    return people;
  }
  objectInspector(const_obj());
  tinyLogger("\n\n\n\n\n\n");
  const map1 = Map({ a: 1, b: 2, c: 3 });
  const map2 = map1.set("b", 50);
  map1.get("b") + " vs. " + map2.get("b"); // 2 vs. 50
  var oldObject = {
    mem000000001: "stringAtFirstMemStack",
    mem000000002: 0xbadc0de,
    mem000000003: {
      mem000000103: "stringAtSecondsMemStack",
      mem000000203: 0xc0de00c0de,
      mem000000303: {
        mem00010303: "stringAtThirdMemStack",
        mem00020303: 0xabcdef012,
        mem00030303: [
          {
            mem01030303: "MemberOne",
            mem02030303: 12345,
          },
          {
            mem03030303: "MemberTwo",
            mem04030303: 67890,
          },
          {
            mem05030303: "MemberThree",
            mem06030303: 13579,
          },
        ],
      },
    },
  };
  var newObject = {
    mem000000001: "stringAtFirstMemStack",
    mem000000002: 0xbadc0de,
    mem000000003: {
      mem000000103: "stringAtSecondsMemStack",
      mem000000203: 0xc0de00c0de,
      mem000000303: {
        mem00010303: "stringAtThirdMemStack",
        mem00020303: 0xabcdef012,
        mem00030303: [
          {
            mem01030303: "MemberOne",
            mem02030303: 12345,
          },
          {
            mem03030303: "MemberTwo",
            mem04030303: 10597,
          },
          {
            mem05030303: "MemberThree",
            mem06030303: 13579,
          },
        ],
      },
    },
  };

  objectComparator(oldObject, newObject);
}

entryPoint();
