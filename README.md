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

```css
// App.css

@use "asterix-ui/styles/styles";
@use "asterix-ui/styles/fonts";

// ...
```

UIKit supports different themes: light and dark. Your app must be rendered inside `ThemeProvider`:

```jsx
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "asterix-ui";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme="light">
    <App />
  </ThemeProvider>
);
```
