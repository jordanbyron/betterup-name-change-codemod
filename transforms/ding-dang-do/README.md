# ding-dang-do


## Usage

```
npx betterup-name-change-codemod ding-dang-do path/of/files/ or/some**/*glob.js

# or

yarn global add betterup-name-change-codemod
betterup-name-change-codemod ding-dang-do path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js ding-dang-do path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [advanced](#advanced)
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="advanced">**advanced**</a>

**Input** (<small>[advanced.input.js](transforms/ding-dang-do/__testfixtures__/advanced.input.js)</small>):
```js
class betterUpContainer {
  @service betterUp;

  title = " WOW BeTtErUp is COOL";
}

```

**Output** (<small>[advanced.output.js](transforms/ding-dang-do/__testfixtures__/advanced.output.js)</small>):
```js
class betterUpContainer {
  @service betterUp;

  title = " WOW BetterUp is COOL";
}

```
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/ding-dang-do/__testfixtures__/basic.input.js)</small>):
```js
const welcomeMessage = "Welcome to Betterup";

```

**Output** (<small>[basic.output.js](transforms/ding-dang-do/__testfixtures__/basic.output.js)</small>):
```js
const welcomeMessage = "Welcome to BetterUp";

```
<!--FIXTURES_CONTENT_END-->