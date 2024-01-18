import React from 'react';
import { calculateTotalPointsForCustomer, calculatePointsForLastMonth } from '../services/pointCalculator';
import TransactionTable from './TransactionTable';

const CustomerCard = ({ customer }) => {
    return (
        <div className="mb-8 p-4 bg-white rounded shadow">
            <h3 className="text-xl font-bold mb-2">{customer.name}</h3>
            <p className="text-gray-600">Total Points: {calculateTotalPointsForCustomer(customer.transactions)}</p>
            <p className="text-gray-600">Last month Points: {calculatePointsForLastMonth(customer.transactions)}</p>
            {customer.transactions.length > 0 ?
                <TransactionTable transactions={customer.transactions} />
                : <p className="text-gray-600">Customer has no transactions</p>
            }
        </div>
    );
};

export default CustomerCard;
