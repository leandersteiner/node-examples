# Closures

> A closure is a function plus a connection to the variables that exist at its “birth place”

## Examples

```js
const createInc = start => {
  return step => {
    // (A)
    start += step;
    return start;
  };
};

const inc = createInc(5);
console.log(inc(1));
console.log(inc(2));
console.log(inc(3));

const inc2 = createInc(1);
console.log(inc2(1));
console.log(inc2(2));
console.log(inc2(3));
```

### Once utility function

```js
const once = cb => {
  let called = false;
  return () => {
    if (called) {
      console.log('Function can only be executed once');
    } else {
      cb();
      called = true;
    }
  };
};

const test = () => console.log('Test');

const testOnce = once(test);
testOnce();
testOnce();
```

Output:

```
Test
Function can only be executed once
```
