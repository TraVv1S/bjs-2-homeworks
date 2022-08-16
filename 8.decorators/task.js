function cachingDecoratorNew(func) {
  let cache = [];
  
  function wrapper(...args) {
      const hash = args.join(','); // получаем правильный хэш
      let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
      
      if (objectInCache) { // если элемент найден
          console.log("Из кэша: " + objectInCache.value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
          return "Из кэша: " + objectInCache.value;
      } 
  
      let result = func.call(this, ...args); // в кэше результата нет - придётся считать
      cache.push({hash, value: result}) ; // добавляем элемент с правильной структурой

      if (cache.length > 5) { 
        cache.shift() // если слишком много элементов в кэше надо удалить самый старый (первый) 
      }

      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
      
  }
  return wrapper;
}

function debounceDecoratorNew(func, ms) {
  let timeout;
  let flag = false;

  function wrapper(...args) {
    
    
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
      flag = false;
    }, ms);
    
    if (flag) {
      func.apply(this, args);
      flag = true;
    }
  
  };

  return wrapper;

}

function debounceDecorator2(func, ms) {
  let timeout;
  let flag = false;
  // let count = 1;

  function wrapper(...args) {
    wrapper.count = 1;
    console.log('Было произведено ' + count++ + ' вызовов');
    
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
      flag = false;
    }, ms);
    
    if (flag) {
      func.apply(this, args);
      flag = true;
    }
  };

  return wrapper;
}