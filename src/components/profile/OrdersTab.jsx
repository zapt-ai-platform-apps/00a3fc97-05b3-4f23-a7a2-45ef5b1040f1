import React from 'react';
import { Link } from 'react-router-dom';

// Sample orders data
const orders = [
  {
    id: 'ORD-12345',
    date: '2023-11-10',
    status: 'Delivered',
    statusColor: 'green',
    total: 159.98,
    items: [
      {
        id: 1,
        name: 'Classic Fit Cotton Shirt',
        size: 'M (Custom)',
        color: 'White',
        image: 'PLACEHOLDER',
        imageRequest: 'white cotton dress shirt on minimal background'
      },
      {
        id: 2,
        name: 'Tailored Slim Pants',
        size: 'Custom',
        color: 'Black',
        image: 'PLACEHOLDER',
        imageRequest: 'black slim fit dress pants on minimal background'
      }
    ]
  },
  {
    id: 'ORD-12344',
    date: '2023-10-25',
    status: 'Tailoring',
    statusColor: 'blue',
    total: 129.99,
    items: [
      {
        id: 3,
        name: 'Modern Fit Blazer',
        size: '42R (Custom)',
        color: 'Navy',
        image: 'PLACEHOLDER',
        imageRequest: 'navy blue blazer jacket on minimal background'
      }
    ]
  },
  {
    id: 'ORD-12343',
    date: '2023-10-15',
    status: 'Delivered',
    statusColor: 'green',
    total: 79.99,
    items: [
      {
        id: 4,
        name: 'Casual Weekend Dress',
        size: 'S (Custom)',
        color: 'Floral',
        image: 'PLACEHOLDER',
        imageRequest: 'floral summer dress on minimal background'
      }
    ]
  }
];

const OrdersTab = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Your Orders</h2>
      
      {orders.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <p className="text-gray-600">You haven't placed any orders yet.</p>
          <Link to="/" className="mt-4 btn-primary cursor-pointer inline-block">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Order Header */}
              <div className="bg-gray-50 p-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between">
                <div>
                  <p className="text-sm text-gray-500">Order placed</p>
                  <p className="font-medium">{new Date(order.date).toLocaleDateString()}</p>
                </div>
                
                <div className="mt-2 sm:mt-0">
                  <p className="text-sm text-gray-500">Order number</p>
                  <p className="font-medium">{order.id}</p>
                </div>
                
                <div className="mt-2 sm:mt-0">
                  <p className="text-sm text-gray-500">Total</p>
                  <p className="font-medium">${order.total.toFixed(2)}</p>
                </div>
                
                <div className="mt-2 sm:mt-0">
                  <p className="text-sm text-gray-500">Status</p>
                  <p className={`font-medium text-${order.statusColor}-600`}>{order.status}</p>
                </div>
              </div>
              
              {/* Order Items */}
              <div className="divide-y divide-gray-200">
                {order.items.map((item) => (
                  <div key={item.id} className="p-4 sm:p-6 flex flex-col sm:flex-row">
                    {/* Product Image */}
                    <div className="flex-shrink-0 w-full sm:w-20 h-20 rounded overflow-hidden mb-4 sm:mb-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        data-image-request={item.imageRequest}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Product Details */}
                    <div className="flex-grow sm:ml-6">
                      <h4 className="text-base font-medium text-gray-900">{item.name}</h4>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.color} · Size {item.size}
                      </p>
                      
                      <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-4">
                        <Link to={`/product/${item.id}`} className="text-sm text-primary-600 hover:text-primary-700">
                          View Product
                        </Link>
                        
                        {order.status === 'Delivered' && (
                          <button className="text-sm text-gray-700 hover:text-gray-900 cursor-pointer">
                            Request Alterations
                          </button>
                        )}
                        
                        <button className="text-sm text-gray-700 hover:text-gray-900 cursor-pointer">
                          Track Order
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Order Actions */}
              <div className="bg-gray-50 p-4 border-t border-gray-200 flex justify-end space-x-4">
                <button className="btn-outline cursor-pointer text-sm">
                  Order Details
                </button>
                
                {order.status === 'Delivered' && (
                  <button className="btn-primary cursor-pointer text-sm">
                    Buy Again
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersTab;