import React,{useState,useEffect} from 'react';

import Nav from '../components/Nav';
import Content from '../components/Content';
import AddTodo from '../components/AddTodo';



const Index = () => {
    const [status, setStatus] =useState(false);
    const [array, setArray] =useState([]);
    const [time, setTime] = useState(new Date());

  useEffect(() => {
    return () => {
      setTime(new Date())
    }
  }, [])
  

// console.log(time.toLocaleTimeString)
    const enable =()=>{
        setStatus(!status)
    }

    const handleData=(props)=>{
      setArray((prev)=>{
        return [...prev ,{props}]
      })
    }
    console.log(time)
  return (
    <div>
        {/* <Nav time={time}/> */}
        {status && <AddTodo handler={handleData} />}
        <Content state={enable} datas={array} />
    </div>
  )
}

export default Index;