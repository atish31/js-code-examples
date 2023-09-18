// https://learnersbucket.com/examples/interview/get-object-value-from-string-path/

const obj = {
    a: {
      b: {
        c: [1,2,3]
      }
    }
  };


  const get = (obj, path) => {
    let arrayPath = [];
    for (let i = 0; i < path.length; i++) {
      if(path[i] !== '.' && path[i] !== '[' &&  path[i] !== ']') {
        arrayPath.push(path[i]);
      }
    }


    for (let i = 0; i < arrayPath.length; i++) {
      obj = obj[arrayPath[i]];
    }

    return obj;
  }
  
console.log(get(obj, 'a.b.c')); 
console.log(get(obj, 'a.b.c.0')); 
console.log(get(obj, 'a.b.c[1]')); 
console.log(get(obj, ['a', 'b', 'c', '2']));
console.log(get(obj, 'a.b.c[3]'));
console.log(get(obj, 'a.c')); 