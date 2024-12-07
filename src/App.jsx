import { useEffect } from "react";
import { useState } from "react"
import { useFetch } from "./hooks/useFetch";




function App(){

  const [currentPost, setCurrentPost] = useState(1);  
  const { finalData, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);
  
  if (loading){
    return <div>
      Loading...
    </div>
  }

  return (
    <div>
      <button onClick={() => setCurrentPost(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      <button onClick={() => setCurrentPost(3)}>3</button>

      {JSON.stringify(finalData)}
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
