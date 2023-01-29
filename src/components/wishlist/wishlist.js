import React from 'react'
import './wishlist.scss'
import { FoodCategories as foods } from "../../data";
import WishListItem from './wishlistItem';
import { useSelector } from 'react-redux';

// a user can only have seven items in the wishlist. if the list if full while trying to add a new item, remove the item that was first added on the list i.e use a queue data structure e.g ['item1','item2','item3'] remove item 1 and push a new item at the end of the array.

const Wishlist = () => {
    const wishlistItems = useSelector((state)=> state.wishlist.wishlistItems)
    const renderItems = () => {
        return wishlistItems.map((food) => <WishListItem {...food} />);
    }
    const emptyWishlist = () => {
        return <img className='img' src='https://elitejewelryhouse.com/assets/images/empty-wishlist.png' alt='empty wishlist'/>
    }
    return <div className='wishlist'>
          {
              !wishlistItems.length ? emptyWishlist() : null
          }
               {
                   renderItems()
               }
           
    </div>
}


export default Wishlist