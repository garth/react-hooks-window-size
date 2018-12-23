# react-hooks-window-size

A react hooks approach to window resize events.

> Disclaimer: To use hooks a pre-release version of react 16.7 is required. Since the hooks API is subject to change, this library may or may not work with future versions of react.

## Install

```
yarn add react-hooks-window-size
```

or

```
npm install react-hooks-window-size
```

## Usage Example

```tsx
import React from 'react'
import { useWindowSize } from 'react-hooks-window-size'

const App: React.StatelessComponent = () => {
  const size = useWindowSize()

  return (
    <p>
      The window is currently {size.width}px by {size.height}px.
    </p>
  )
}

export default App
```
