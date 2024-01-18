import React from 'react';
import CustomerList from './components/CustomerList';

const App = () => {
    return (
        <div className="container mx-auto py-2">
            <h1 className="text-lg font-bold">Reward Program</h1>
            <CustomerList />
        </div>
    );
};

export default App;
