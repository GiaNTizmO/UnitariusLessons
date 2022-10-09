import {tinyLogger } from './helpers/extenstions.mjs'
import {dateWork} from './dateWork.js'
import {allVariablesTypes, variablesBasicOperating, variablesAdvancedOperating, getValueFromItem, funcCallVar, Task6, ObjectInspector} from './homeTask.js'

function entryPoint(){
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
    tinyLogger("Executing task: push function as argument and get function variable");
    var funcdata = funcCallVar(Date);
    tinyLogger(`Typeof: ${funcdata}, Value: ${funcdata()}`, "Task №5");
    tinyLogger("Executing task №6")
    const constReturnedData = Task6();
    tinyLogger(constReturnedData);
    tinyLogger("Executing task №7 - ObjectInspecting")
    var myCar = new Object(); // paste from: https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects
    myCar.make = "Ford";
    myCar.model = "Mustang";
    myCar.year = 1969;
    ObjectInspector(myCar);
}

entryPoint();