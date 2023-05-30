import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai'

 


const Nav = ({time}) => {

        
  return (
    <nav>
        <div>
            <h2>{time}</h2>
            <h2>Welcome</h2>
            <h2>ToDo</h2>
        </div>
        <form >
            <input type="search" name="search" id="search" placeholder='Search.....'/>
            <button type="submit">{<AiOutlineSearch/>}</button>
        </form>
    </nav>
  )
}

export default Nav