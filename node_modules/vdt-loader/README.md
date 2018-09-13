# vdt loader for webpack

## Installation

```npm
npm install vdt-loader --save-dev
```

## Usage

```js
require('vdt?noWith!./file.vdt');
```

Alternately, set this in config file.

For webpack@1.0

```js
module: {
    loaders: [
        test: /\.vdt$/,
        loader: 'vdt-loader?noWith&delimiters={{}}'
    ]
}
```

For webpack@2.0/3.0

```js
module: {
    rules: [
        {
            test: /\.vdt$/,
            use: [
                {
                    loader: 'vdt-loader',
                    options: {
                        noWith: true,
                        delimiters: ['{{', '}}']
                    }
                }
            ]
        }
    ]
}
```

## Querystring

[Vdt options](https://github.com/Javey/vdt.js#vdtsource-options)

You can also pass querystring like below

```js
'vdt-loader?options=' + encodeURIComponent(JSON.stringify({
    noWith: true,
    delimiters: ['{{', '}}']
}))
```

## ***Notice***
1. v1.4.2 之后默认全部导出为es6模块 , 不再支持导出commonjs模块