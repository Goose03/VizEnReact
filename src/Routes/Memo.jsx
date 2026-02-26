import { useState, memo } from 'react'

import Component1 from './Components/Component1'
import Component2 from './Components/Component2'
import Component3 from './Components/Component3'

const MemoComponent1 = memo(Component1)
const MemoComponent2 = memo(Component2)
const MemoComponent3 = memo(Component3)

function Memo() {
  const [count, setCount] = useState(0)

  const Components = [
    MemoComponent1,
    MemoComponent2,
    MemoComponent3
  ]

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/Memo.jsx</code> and save to test HMR
        </p>
      </div>

      <div>
        {Components.map((Component, index) => (
          <Component key={index} />
        ))}
      </div>
    </>
  )
}

export default Memo
