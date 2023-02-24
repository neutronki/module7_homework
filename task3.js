// если не ошибаюсь основа такая 
const emptyObj = Object.create(null);

// и вроде должно быть так, если с выводом результата
function createObject () {
  return Object.create(null);
}

const obj = createObject();
console.log(obj);
console.log(Object.getPrototypeOf(obj));