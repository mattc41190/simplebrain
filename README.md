# simplebrain
A super simple way to think about machine learning

```javascriot
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

What Do I Need?

1. computer
2. node
3. git

How Do I Do It?

1. `git clone https://github.com/mattc41190/simplebrain.git`
2. `cd simplebrain/linear-regression/least-square/comprehension`
3. `node linear-regression.js`


All methods are resource wasting and verbose, but simple.

1. linear-regression
