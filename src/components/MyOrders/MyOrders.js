import React, { useEffect, useState } from 'react';
import OrdersItem from '../OrdersItem/OrdersItem';
import PlaceOrder from '../PlaceOrder/PlaceOrder'

const MyOrders = () => {
  const [item, setItem] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/orders')
      .then(response => response.json())
      .then(data => setItem(data))
  }, []);
  return (
    <div className="d-flex flex-wrap m-24">
      <div className="sm:w-full md:w-3/5">
        <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
            <div className="flex items-start justify-between">
              <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">
                My Orders
              </h2>
              
            </div>
            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {
                    item?.map(itm => <OrdersItem key={itm?.id} itm={itm}></OrdersItem>)
                  }
                </ul>
              </div>
            </div>
          </div>
          
      </div>

          <div className="sm:w-full md:w-2/5">
            <PlaceOrder></PlaceOrder>
          </div>
        <div className="border-t border-gray-200 py-6 px-4 sm:px-6 w-2/3 mx-auto">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>$262.00</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
            <div className="mt-6">
              <a href="#" className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">Checkout</a>
            </div>
            <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
              <p>
                or <button type="button" className="text-indigo-600 font-medium hover:text-indigo-500">Continue Shopping<span aria-hidden="true"> →</span></button>
              </p>
            </div>
          </div>
    </div>
  );
};

export default MyOrders;