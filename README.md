# eslint-plugin-valtech [![Travis CI](https://travis-ci.org/valtech-nyc/eslint-plugin-valtech.svg?branch=master)](https://travis-ci.org/valtech-nyc/eslint-plugin-valtech)

Custom Eslint rules for Valtech JavaScript projects.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-valtech`:

```
$ npm install eslint-plugin-valtech --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-valtech` globally.

## Usage

Add `valtech` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "valtech"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "valtech/rule-name": 2
    }
}
```

## Supported Rules

* [react-router-no-literals](docs/rules/react-router-no-literals.md)
* [filename-match-default-export](docs/rules/filename-match-default-export.md)
* [max-length-import-relative-path](docs/rules/max-length-import-relative-path.md)
