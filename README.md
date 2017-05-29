# simplebrain
A super simple way to think about machine learning

### Library is in ALPHA

```javascript
const lr = require('simplebrain').linearRegression;

const trained_model = lr.train([
  {"x" :  1, "y" : 2},
  {"x" :  2, "y" : 4},
  {"x" :  3, "y" : 5},
  {"x" :  4, "y" : 4},
  {"x" :  5, "y" : 5}
]);

const grade = lr.grade(trained_model, [
  {"x" :  1, "y" : 2},
  {"x" :  2, "y" : 4},
  {"x" :  3, "y" : 5},
  {"x" :  4, "y" : 4},
  {"x" :  5, "y" : 5}
]);

console.log(grade); // 0.8
```

## API:

### linearRegression

* `train([{x: 1, y: 1}, ...])` => Returns a model (If you are looking for b0 and b1 this is where to find it `console.log(model)`)
* `grade(model, [{x: 1, y: 1}, {x: 1, y: 2}])` => Returns a grade / number
