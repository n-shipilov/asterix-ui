# UIKit

A set of flexible, highly practical, and efficient React components for creating rich web applications.

<!--/GITHUB_BLOCK-->

## Install

```shell
npm install --save-dev asterix-ui
```

## Usage

```jsx
import React from "react";
import { Button } from "asterix-ui";

const Button = <Button view="primary" size="m" />;
```

### Styles

UIKit comes with base styling and theme. In order to everything look nice include this at the top of your entry file:

```js
// index.js

import "asterix-ui/styles/styles.scss";
import "asterix-ui/styles/fonts.scss";

// ...
```
