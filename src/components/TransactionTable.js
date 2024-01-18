import React from 'react';

const TransactionTable = ({ transactions }) => {
    return (
        <table className="w-full mt-4">
            <thead className="text-left">
                <tr className="bg-gray-200">
                    <th className="py-2 px-4">Transaction ID</th>
                    <th className="py-2 px-4">Amount</th>
                    <th className="py-2 px-4">Date</th>
                </tr>
            </thead>
            <tbody>
            {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b">
                    <td className="py-2 px-4">{transaction.id}</td>
                    <td className="py-2 px-4">${transaction.amount}</td>
                    <td className="py-2 px-4">{new Date(transaction.date).toLocaleString()}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default TransactionTable;