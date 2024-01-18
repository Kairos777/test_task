import React, {useState, useEffect} from 'react';
import {fetchCustomerData} from '../services/api';
import CustomerCard from './CustomerCard';
import spinner from '../assets/spinner.svg';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchCustomerData()
            .then(setCustomers)
            .catch(error => {
                console.error('Error loading data:', error);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <img src={spinner} className="animate-spin my-40 mx-auto w-20 h-20" alt="spinner"/>;
    }

    if (error) {
        return <div>Error loading data. Please try again later.</div>;
    }

    return (
        <div className="mt-8 p-4 bg-gray-200 rounded">

            <h2 className="text-2xl font-bold mb-4">Customer List</h2>
            {customers.map((customer) => (
                <CustomerCard key={customer.id} customer={customer} />
            ))}
        </div>
    );
};

export default CustomerList;
