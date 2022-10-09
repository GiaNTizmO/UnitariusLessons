import {tinyLogger } from './helpers/extenstions.mjs'

/**
* Function that log all variables types in nodeJS
*/
export function allVariablesTypes(){
    var exampleBool = false;
    var exampleNull = null;
    var exampleUndefined;
    var exampleNumber = Number.MAX_VALUE;
    var exampleBigInt = 9007199254740991n;
    var exampleString = "example string";
    var exampleSymbol = Symbol('c');
    var exampleArray = [exampleBool, exampleNull, exampleUndefined, exampleNumber, exampleBigInt, exampleString, exampleSymbol];
    //String() casting, because Symbol not stringing from parent type
    exampleArray.forEach(element => tinyLogger(`element type: ${typeof(element)} got value: ${String(element)}`, "typesTask"));
    //Ugly method to fix the problem of converting an object of type Symbol to string, because need stringing array
    var exampleSymbol = String(Symbol('c'));
    var exampleArray = [exampleBool, exampleNull, exampleUndefined, exampleNumber, exampleBigInt, exampleString, exampleSymbol];
    tinyLogger(`element type: ${typeof(exampleArray)} got value: ${(exampleArray)}`, "typesTask")
}

/**
* Function that use oprtators to variables
*/
export function variablesBasicOperating(){
    var exampleBool = false;
    var exampleNull = null;
    var exampleUndefined;
    var exampleNumber = Number.MAX_VALUE;
    var exampleBigInt = 9007199254740991n;
    var exampleString = "example string";
    //exampleSymbol Has no operators :(
    exampleBool = true;
    exampleNull = exampleNull + null;
    exampleNumber = exampleNumber / 5e+208;
    exampleBigInt = exampleBigInt - BigInt(2);
    exampleString = exampleString + " and some example string!";
    var someExample = 10 % 4;
    var exampleArray = [exampleBool, exampleNull, exampleUndefined, exampleNumber, exampleBigInt, exampleString, someExample];
    exampleArray.forEach(element => tinyLogger(`element type: ${typeof(element)} got value: ${String(element)}`, "typesBasicOperating"));
}

/**
* Function that make some dirt bullsh*t with variables
*/
export function variablesAdvancedOperating(){
    var exampleBool = false;
    var exampleNull = null;
    var exampleUndefined;
    var exampleNumber = Number.MAX_VALUE;
    var exampleBigInt = 9007199254740991n;
    var exampleString = "example string";
    //exampleSymbol Has no operators :(
    exampleBool = Boolean(1);
    exampleNull = exampleNull + undefined;
    exampleNumber = exampleNumber + " and join string!";
    exampleBigInt = exampleBigInt - BigInt(2);
    exampleString = exampleString + BigInt.MAX_VALUE;
    var exampleArray = [exampleBool, exampleNull, exampleUndefined, exampleNumber, exampleBigInt, exampleString];
    exampleArray.forEach(element => tinyLogger(`element type: ${typeof(element)} got value: ${String(element)}`, "typesAdvancedOperating"));
}

function getPrimitiveValue(item){
    return item[0];
}

/**
* Function that return returnings from getPrimitiveValue function
* @param    {object} itemToGetValue Variable to get primitive value
* @return   {object}                primitive value
*/
export function getValueFromItem(itemToGetValue){
    return getPrimitiveValue(itemToGetValue);
}


/**
* Variable that return returnings from function (NOT CALLING!!!), sended in arguments
* @param    {function} func Variable to get primitive value
* @return   {object}        Function call
*/
export var funcCallVar = function functionCaller(func){
    return func;
}

/**
* Мне слишком лень всё описывать на английском языке всё, давайте сделаем вид что я всё тут написал? Ок?)
*/
export function Task6(){
    var Parent = new Object();
    Parent.String = "Example string was here";
    Parent.Number = 12345;
    var ChildObject = new Object();
    ChildObject.String = "Child string was here";
    ChildObject.Number = -12345;
    Parent.ChildObject = ChildObject;
    Parent.Array = ["string", 12345];
    const ReturnableVariable = Parent;
    return ReturnableVariable;
}

/**
* Function that return object properties information
* @param    {object} obj            Object to grab info
*/
export function ObjectInspector(obj){
    if (obj != null){
        var objectProperties = Object.getOwnPropertyNames(obj); //got from: https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects
        for (let el of objectProperties){
            tinyLogger(`object property name: [${el}] type: [${typeof(obj[el])}] value: [${obj[el]}]`, "objectInspector")
        }
    }
}