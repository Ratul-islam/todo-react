import React from 'react'
import Todo from './Todo'
import AddBtnTodo from '../subcomponenet/addBtnTodo'


const Content = ({state, datas}) => {
    // console.log(state)
    console.log(datas)
  return (
    <div className='contentSec'>
        {datas && datas.map(data => <Todo title={data.props.title} desc={data.props.desc} />)}
        <AddBtnTodo state={state}/>
    </div>
  )
}

export default Content