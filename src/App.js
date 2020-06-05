import React, { useEffect, useState } from 'react'

const App = props => {
  const [state, setState] = useState(props)
  const {name, price} = state

  useEffect(() => {
    console.log("This is like componentDidMount or componentDidUpdate")
    // mounted componentDidMountで実行 (componentDidMount)
    // watch all variable inside DOM (componentDidUpdate)
  })

  useEffect(() => {
    console.log("This is like componentDidMount")
    // mounted componentDidMountで実行 (componentDidMount)
    // watch empty (not componentDidUpdate)
  }, [])

  useEffect(() => {
    // mounted componentDidMountで実行 (componentDidMount)
    // watch name (componentDidUpdate)
    console.log("This is for name only")
  }, [name])

  return (
  <>
    <p>現在の{name}は、{price}円です</p>
    <button onClick={() => setState({ ...state, price: price + 1})}>+1</button>
    <button onClick={() => setState({ ...state, price: price - 1})}>-1</button>
    <button onClick={() => setState(props)}>Reset</button>
    <input value={name} onChange={e => setState({ ...state, name: e.target.value})}/>
  </>
  )
}

App.defaultProps = {
  name: 'サンプル',
  price: 1000
}

export default App
