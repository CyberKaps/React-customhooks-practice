import { useEffect } from "react";
import { useState } from "react"
import { useFetch } from "./hooks/useFetch";
import { usePrev } from "./hooks/usePrev";




function App(){

  // const [currentPost, setCurrentPost] = useState(1);  
  // const { finalData, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);
  
  // if (loading){
  //   return <div>
  //     Loading...
  //   </div>
  // }


  const [state, setState] = useState(0);
  const prev = usePrev(state);

  return (
    <div>
      {/* <div>
        <h1>useFetch</h1>
        <button onClick={() => setCurrentPost(1)}>1</button>
        <button onClick={() => setCurrentPost(2)}>2</button>
        <button onClick={() => setCurrentPost(3)}>3</button>

        {JSON.stringify(finalData)}
      </div> */}
      <div>
        <h1>usePrev</h1>
        <p>{state}</p>
        <button onClick={() => { setState(curr => curr + 1) }}>Click me</button>
        <p>The previous value was {prev}</p>
      </div>

    </div>
  )
}

export default App





// // custom hook
// function useCounter(){
//   const [count, setCount] = useState(0);

//   function increaseCount(){
//     setCount(count + 1);
//     // setCount(c => c + 1);
//   }
//   return {
//     count: count,
//     increaseCount: increaseCount
//   }

// }

// function App() {
//   const {count, increaseCount} = useCounter();

//   return (
//     <>
//       <div>
//         <button onClick={increaseCount}>Increase {count}</button>
//       </div>
//     </>
//   )
// }

// export default App
