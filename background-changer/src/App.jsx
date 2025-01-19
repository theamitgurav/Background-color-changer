import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState("aqua")

  return (
    <div className='w-full h-screen' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0'>
        <div className=' flex flex-wrap justify-center gap-3 py-3 px-3 bg-white shadow-lg rounded-3xl'>
          <button onClick={()=>setColor("red")}
          style={{background:"red"}}
          className='outline-none rounded-full py-2 px-4  text-white shadow-lg'
          >RED</button>

          <button onClick={()=>setColor("gold")}
          style={{background:"gold"}}
          className='outline-none rounded-full py-2 px-4  text-white shadow-lg'
          >GOLD</button>

          <button onClick={()=>setColor("violet")}
          style={{background:"violet"}}
          className='outline-none rounded-full py-2 px-4  text-white shadow-lg'
          >VIOLET</button>

          <button onClick={()=>setColor("lime")}
          style={{background:"lime"}}
          className='outline-none rounded-full py-2 px-4  text-white shadow-lg'
          >LIME</button>

          <button onClick={()=>setColor("blue")}
          style={{background:"blue"}}
          className='outline-none rounded-full py-2 px-4 text-white shadow-lg '
          >BLUE</button>
        </div>
      </div>
    </div>
  )
}

export default App
