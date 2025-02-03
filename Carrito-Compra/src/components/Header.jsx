import React, {useContext} from 'react'
import { CartContext } from '../context/context';

function Header() {
  
  const {total,setTotal} = useContext(CartContext);
  return (
    <div>
        <ul>
          <li>Home</li>
          <li>News</li>
          <li>Contact</li>
          <li>About us</li>
          <span>Total: {total}</span>
        </ul>
    </div>
  )
}

export default Header;
