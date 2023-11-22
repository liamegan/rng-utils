# Random number utils

## Installation

Install the package using NPM:
```
npm install rng-utils
```
## Quick-start

To get started with the library:
- Import what you need!
- If you want to supply a different RNG, do so using setRNG.
- Use your helpers!

```
// import
import { setRNG, randomBetween, gaussianRandom } from "@liamegan1/fxhash-helpers"

// If you want to set the functions to use a different RNG, say something seeded, do so using setRNG. By default, the library just uses Math.random (PRNG below curtesy of fxhash, MIT - https://github.com/fxhash/fxhash-boilerplate)
// There are hundreds of different javascript PRNGs out there. Find one you like :)
var alphabet = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
function b58dec(str) {
  return [...str].reduce(function(p, c) {
    return p * alphabet.length + alphabet.indexOf(c) | 0;
  }, 0);
}
function sfc32(seed) {
  let a = seed[0] | 0;
  let b = seed[1] | 0;
  let c = seed[2] | 0;
  let d = seed[3] | 0;
  return function() {
    a |= 0;
    b |= 0;
    c |= 0;
    d |= 0;
    const t = (a + b | 0) + d | 0;
    d = d + 1 | 0;
    a = b ^ b >>> 9;
    b = c + (c << 3) | 0;
    c = c << 21 | c >>> 11;
    c = c + t | 0;
    return (t >>> 0) / 4294967296;
  };
}
function matcher(str, start) {
  return str.slice(start).match(new RegExp(".{" + (str.length - start >> 2) + "}", "g")).map(function(substring) {
    return b58dec(substring);
  });
}
const R = sfc32(matcher('123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ', 0));

setRNG( R );

// Good to go!
const randomAngle = randomBetween(-Math.PI, Math.PI);

```

## Details## Constants

<dl>
<dt><a href="#setRNG">setRNG</a></dt>
<dd><p>Initialises the library with a PRNG function. Most functions expect the PRNG to return 0-1 exclusive.</p>
</dd>
<dl>
<dt><a href="#FXInit">r</a></dt>
<dd><p>Get a straight-up random number between 0 and 1 non-inclusive.</p>
</dd>
<dt><a href="#randomBetween ">randomBetween </a></dt>
<dd><p>Returns a random float between two numbers.</p>
<pre><code>randomBetween (-10, 10); // -1.234576
</code></pre>
</dd>
<dt><a href="#randomIntBetween ">randomIntBetween </a></dt>
<dd><p>Returns a random integer between two numbers - min, and max exclusive of max.
If you want it to be inclusive of max, set the upper number to a floating point number like 10.99</p>
<pre><code>randomIntBetween (-10, 10); // 2
</code></pre>
</dd>
<dt><a href="#randomOption ">randomOption </a></dt>
<dd><p>Returns a random option from a provided list of options.</p>
<pre><code>randomOption ([&quot;I&quot;, &quot;are&quot;, &quot;weasel&quot;]); // &quot;weasel&quot;
</code></pre>
</dd>
<dt><a href="#randomBool ">randomBool </a></dt>
<dd><p>Returns a random boolean given a weight (optional).</p>
<pre><code>randomBool (.2); // false
</code></pre>
</dd>
<dt><a href="#randVec2">randVec2</a></dt>
<dd><p>Returns a 2-dimensional vector, expressed as an array, populated with random numbers </p>
<pre><code>randVec2(); // [.1234, .57351]
</code></pre>
</dd>
<dt><a href="#randVec3">randVec3</a></dt>
<dd><p>Returns a 3-dimensional vector, expressed as an array, populated with random numbers </p>
<pre><code>randVec3(); // [.1234, .57351, .01234]
</code></pre>
</dd>
<dt><a href="#randVec4">randVec4</a></dt>
<dd><p>Returns a 4-dimensional vector, expressed as an array, populated with random numbers </p>
<pre><code>randVec4(); // [.1234, .57351, .01234, .9634]
</code></pre>
</dd>
<dt><a href="#weightedOption">weightedOption</a></dt>
<dd><p>Returns a weighted random option, given an array of options with weights.</p>
<pre><code>let color = getWeightedOption([
  [&quot;red&quot;, 10],
  [&quot;green&quot;, 30],
  [&quot;blue&quot;, 50],
]);
</code></pre>
</dd>
<dt><a href="#gaussianRandom">gaussianRandom </a></dt>
<dd><p>Returns a gaussian distributed random number, centered around a mean.</p>
<pre><code>let gr = ga`ussianRandom(5, 20);
</code></pre>
</dd>
</dl>

<a name="randomBetween"></a>

## randomBetween
Returns a random float between two numbers.
```
randomBetween(-10, 10); // -1.234576
```

**Kind**: global constant  

| Param | Description |
| --- | --- |
| min | The minimum value |
| max | The maximum value |

<a name="randomIntBetween"></a>

## randomIntBetween
Returns a random integer between two numbers - min, and max exclusive of max.
If you want it to be inclusive of max, set the upper number to a floating point number like 10.99
```
randomIntBetween(-10, 10); // 2
```

**Kind**: global constant  

| Param | Description |
| --- | --- |
| min | The minimum value |
| max | The maximum value |

<a name="randomOption"></a>

## randomOption
Returns a random option from a provided list of options.
```
randomOption(["I", "are", "weasel"]); // "weasel"
```

**Kind**: global constant  

| Param | Description |
| --- | --- |
| options | An array of options to choose from |

<a name="FXRandomBool"></a>

## randomBool
Returns a random boolean given a weight (optional).
```
randomBool(.2); // false
```

**Kind**: global constant  

| Param | Default | Description |
| --- | --- | --- |
| weight | <code>.5</code> | A weight to test the boolean against, if fxrand is less than this number, true is returned. Defaults to 0.5 |

<a name="randVec2"></a>

## randVec2
Returns a 2-dimensional vector, expressed as an array, populated with random numbers 
```
randVec2(); // [.1234, .57351]
```

**Kind**: global constant  
<a name="randVec3"></a>

## randVec3
Returns a 3-dimensional vector, expressed as an array, populated with random numbers 
```
randVec3(); // [.1234, .57351, .01234]
```

**Kind**: global constant  
<a name="randVec4"></a>

## randVec4
Returns a 4-dimensional vector, expressed as an array, populated with random numbers 
```
randVec4(); // [.1234, .57351, .01234, .9634]
```

**Kind**: global constant  
<a name="weightedOption"></a>

## weightedOption
Returns a weighted random option, given an array of options with weights.
```
let color = getWeightedOption([
  ["red", 10],
  ["green", 30],
  ["blue", 50],
]);
```

**Kind**: global constant  

| Param | Description |
| --- | --- |
| options | options in the format of [ [ string: optionName, int: optionNumber ] ] |

<a name="randomGaussian"></a>

## randomGaussian
Returns a gaussian distributed random number, centered around a mean.
```
let gr = randomGaussian(5);
```

**Kind**: global constant  

| Param | Description |
| --- | --- |
| samples | The number of samples to use in the distribution. A higher sample number will result in a tighter bell-curve |
