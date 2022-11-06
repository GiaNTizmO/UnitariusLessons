import { tinyLogger } from "./helpers/extenstions.mjs";

/**
 * Temporaily container for object from reworkedObjectInspector
 */
let objectTemporailyContainer_rev = [];

/**
 * Function that return object properties information
 * @param    {object} obj            Object to grab info
 * @param    {object} container      Container to save info
 * @comment Output like this: type: Object name: name content:[Object] Path: mem00001::mem00011
 */
function reworkedObjectInspector(key, value, container = null) {
  var outputData = "";
  //inspect type
  //if array - array inspecting
  //if object - object inspecting
  if (Array.isArray(value)) {
    //Iterate array
  } else if (typeof value == "object") {
    //inspect object
  } else {
    //Simple data
  }
  return outputData;
}

function objectInspectorTracer(obj, container = null) {
  //reworked copypasta from: https://stackoverflow.com/questions/1068834/object-comparison-in-javascript
  objectTemporailyContainer_rev = [];
  //inspect type
  //excluded Array because its object and getted info in reworkedObjectInspector
  //This function only trace data and sent to grab info in reworkedObjectInspector!
  if (typeof obj == "object") {
    var _obj_keys = Object.keys(obj);
    var _obj_keys = Object.values(obj);
  } else {
    //Simple data
  }
}

function object_equals(x, y, secondStart = false) {
  if (x === y) {
    x.equals = true;
    return x;
  }

  // if both x and y are null or undefined and exactly the same
  if (!(x instanceof Object) || !(y instanceof Object)) {
    if (secondStart) {
      return false;
    }
    x.equals = false;
    return x;
  }

  // if they are not strictly equal, they both need to be Objects

  if (x.constructor !== y.constructor) {
    x.equals = false;
    return x;
  }
  // they must have the exact same prototype chain, the closest we can do is
  // test there constructor.

  for (var p in x) {
    if (!x.hasOwnProperty(p)) {
      p.equals = true;
      continue;
    }
    // other properties were tested using x.constructor === y.constructor

    if (!y.hasOwnProperty(p)) {
      p.equals = false;
    }
    // allows to compare x[ p ] and y[ p ] when set to undefined

    if (x[p] === y[p]) {
      x.equals = true;
      continue;
    }
    // if they have the same strict value or identity then they are equal

    if (typeof x[p] !== "object") {
      x.equals = false;
    }
    // Numbers, Strings, Functions, Booleans must be strictly equal

    if (!object_equals(x[p], y[p], true)) {
      x.equals = false;
    }
    // Objects and Arrays must be tested recursively
  }

  for (p in y)
    if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
      x.equals = false;
    }
  // allows x[ p ] to be set to undefined

  return x;
}

export function objectComparator(var1, var2) {
  tinyLogger(`Starting comparator`, "objectComparator");
  var t = object_equals(var1, var2);
  objectInspectorTracer(var1);
}
