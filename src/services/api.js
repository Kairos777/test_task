import customers from '../mock-data/customers';

export const fetchCustomerData = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve(customers), 1000)
    });
};
