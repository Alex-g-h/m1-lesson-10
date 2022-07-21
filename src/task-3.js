const student = {
  name: 'Alex',
  programmingLanguage: 'JavaScript'
};
console.log('Initial object:', student);


// check 'get' action
const resultGet = handleObject(student, 'name', 'get');
console.log('Action \'get\':', resultGet);

// check 'add' action
const resultAdd = handleObject(student, 'age', 'add');
console.log('Action \'add\':', resultAdd);

// check 'add' action with Symbol
const resultAddSymbol = handleObject(student, Symbol('id'), 'add');
console.log('Action \'add\' with Symbol:', resultAddSymbol);

// check 'delete' action
const resultDelete = handleObject(student, 'programmingLanguage', 'delete')
console.log('Action \'delete\:', resultDelete);

// check 'unknown' action
const resultUnknown = handleObject(student, 'smth', 'unknown');
console.log('Action \'unknow\':', resultUnknown);



/**
 * Perfom get, add, delete actions on object
 * @param {*} obj Object
 * @param {*} key Key
 * @param {*} action Action to perform on object with key
 * @returns Object itselft or value of key
 */
function handleObject(obj, key, action) {
  // check the wrong case
  if (typeof obj !== 'object')
    return obj;

  switch (action) {
    case 'get':
      return obj[key];
    case 'add':
      obj[key] = '';
      return obj;
    case 'delete':
      delete obj[key];
      return obj;
    default:
      return obj;
  }
}