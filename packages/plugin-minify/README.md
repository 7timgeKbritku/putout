# @putout/plugin-minify [![NPM version][NPMIMGURL]][NPMURL]

[NPMIMGURL]: https://img.shields.io/npm/v/@putout/plugin-putout.svg?style=flat&longCache=true
[NPMURL]: https://npmjs.org/package/@putout/plugin-putout "npm"

🐊[**Putout**](https://github.com/coderaiser/putout) plugin adds support of minifiers used in [`@putout/minify`](https://github.com/putoutjs/minify) and [`minify`](https://github.com/coderaiser/minify).

## Install

```
npm i @putout/plugin-putout -D
```

## Rules

```json
{
    "rules": {
        "minify/convert-if-to-logical": "on",
        "minify/remove-return-undefined": "on",
        "minify/mangle-names": "on",
        "minify/types": "on"
    }
}
```

## convert-if-to-logical

Check out in 🐊[**Putout Editor**](https://putout.cloudcmd.io/#/gist/7e7c679157ba7e3746c581c29f77c58d/3c726a73315c8511735b7cb2699d54ef1299aede).

### ❌ Example of incorrect code

```js
if (a)
    console.log('hello');

if (b) {
    console.log('hello');
    console.log('world');
}
```

### ✅ Example of correct code

```js
a && console.log('hello');

b && (console.log('hello'), console.log('world'));
```

## remove-return-undefined

### ❌ Example of incorrect code

```js
const fn = () => {
    if (a)
        return undefined;
    
    return undefined;
};
```

### ✅ Example of correct code

```js
const fn = () => {
    if (a)
        return;
};
```

## mangle-names

Check out in 🐊[**Putout Editor**](https://putout.cloudcmd.io/#/gist/e6d28e60dcd6a6a84066136e8856d7d2/530e143bf2ece70938bd970065c28ed0acd6f5a4).

### ❌ Example of incorrect code

```js
function generate() {
    const hello = 'hi';
    return hello;
}
```

### ✅ Example of correct code

```js
function generate() {
    const a = 'hi';
    return a;
}
```

## types

Check out in 🐊[**Putout Editor**](https://putout.cloudcmd.io/#/gist/208d2f64b68be114e1f9f93cf4b60734/bdae9887bbf05719e365920d60f3b0b7ca29702b).

### ❌ Example of incorrect code

```js
const a = undefined;
const b = true;
const c = false;
```

### ✅ Example of correct code

```js
const a = void 0;
const b = !0;
const c = !1;
```

## License

MIT
