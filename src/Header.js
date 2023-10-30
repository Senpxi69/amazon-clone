import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {

  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='header'>
      <div >
        <Link to="/">
          <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon_logo' />
        </Link>
      </div>

      <div className='header_search'>

        <input className='header_searchInput' type='text' />
        <SearchIcon
          className='header_searchIcon'
        />


      </div>

      <div className='header_nav'>

        <Link to='/login'>
          <div className='header_options'>

            <span className='header_optionLineOne'>
              hello user
            </span>
            <span className='header_optionLineTwo'>
              sign in
            </span>

          </div>
        </Link>

        <div className='header_options'>

          <span className='header_optionLineOne'>
            returns
          </span>
          <span className='header_optionLineTwo'>
            & orders
          </span>

        </div>
        <div className='header_options'>

          <span className='header_optionLineOne'>
            your
          </span>
          <span className='header_optionLineTwo'>
            prime
          </span>

        </div>

      </div>

      <Link to='/checkout'>
        <div className='header_optionBasket'>
          <ShoppingCartIcon />
          <span className='header_basketCount header_optionLineTwo'>{basket?.length}</span>
        </div>
      </Link>
    </div>


  )
}

export default Header