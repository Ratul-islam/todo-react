import React from 'react'

const Todo = ({date, title, desc}) => {

    const trucateTitle =(title)=>{
        if(title && title.length > 5){
          return title.slice(0, 5) + '...'
        }
        return title
    }
  return (
    <div className='todo'>
        <div>
            <p className="date">{date}</p>
            <p className="title">{trucateTitle(title)}</p>
        </div>
        <p>{desc && desc}</p>

        <div>
        <button>Delete</button>
        <button>Edit</button>
        </div>
    </div>
  )
}

export default Todo