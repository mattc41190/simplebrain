## Functions

<dl>
<dt><a href="#train">train(observations)</a> ⇒ <code>Object</code></dt>
<dd><p>train uses a set of observations to create b0 and b1</p>
</dd>
<dt><a href="#createTable">createTable(xMean, yMean, observations)</a> ⇒ <code>Array</code></dt>
<dd><p>createTable uses a set of observations to create a linear regression table</p>
</dd>
<dt><a href="#axisAverage">axisAverage(observations)</a> ⇒ <code>Object</code></dt>
<dd><p>axisAverage uses a set of observations to create means for independent and dependent variables</p>
</dd>
<dt><a href="#predict">predict(observation, b0, b1)</a> ⇒ <code>Number</code></dt>
<dd><p>predict uses an obersation and linear regression data to predict a y coordinate</p>
</dd>
</dl>

<a name="train"></a>

## train(observations) ⇒ <code>Object</code>
train uses a set of observations to create b0 and b1

**Kind**: global function  
**Returns**: <code>Object</code> - - Object containg b0 and b1 values  

| Param | Type | Description |
| --- | --- | --- |
| observations | <code>Array</code> | Array of objects containing numerical axises (Ex: [{x: 1, y: 2}]) |

<a name="createTable"></a>

## createTable(xMean, yMean, observations) ⇒ <code>Array</code>
createTable uses a set of observations to create a linear regression table

**Kind**: global function  
**Returns**: <code>Array</code> - - Observations with all data needed to create b0 and b1  

| Param | Type | Description |
| --- | --- | --- |
| xMean | <code>Number</code> | Mean of all independent coordinates (commonly known as "x") |
| yMean | <code>Number</code> | Mean of all dependent coordinates (commonly known as "x") |
| observations | <code>Array</code> | Array of objects containing numerical axises (Ex: [{x: 1, y: 2}]) |

<a name="axisAverage"></a>

## axisAverage(observations) ⇒ <code>Object</code>
axisAverage uses a set of observations to create means for independent and dependent variables

**Kind**: global function  
**Returns**: <code>Object</code> - - Object containing x axis mean and y axis mean  

| Param | Type | Description |
| --- | --- | --- |
| observations | <code>Array</code> | Array of objects containing numerical axises (Ex: [{x: 1, y: 2}]) |

<a name="predict"></a>

## predict(observation, b0, b1) ⇒ <code>Number</code>
predict uses an obersation and linear regression data to predict a y coordinate

**Kind**: global function  
**Returns**: <code>Number</code> - - A numerical prediction for the y coordinate that accompanies the passed in observation  

| Param | Type | Description |
| --- | --- | --- |
| observation | <code>Number</code> | An independent coordinate (commonly known as "x") |
| b0 | <code>Number</code> | The known y intercept of a regression line |
| b1 | <code>Number</code> | The known slope of a regression line |

