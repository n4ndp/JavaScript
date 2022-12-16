# **Appending Variables to Strings**

Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals (`+=`) operator.

```js
const anAdjective = "awesome!";
let ourStr = "JavaScript is awesome! ";
ourStr += anAdjective;
```

`ourStr` would have the value `JavaScript is awesome!`.