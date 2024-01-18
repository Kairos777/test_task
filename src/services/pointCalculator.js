import {
    REWARD_THRESHOLD_HIGH,
    REWARD_THRESHOLD_MEDIUM,
    REWARD_RATE_HIGH,
    REWARD_RATE_MEDIUM,
} from '../utils/constants';

export const calculateTransactionPoints = (transactionAmount) => {
    let points = 0;

    if (transactionAmount > REWARD_THRESHOLD_HIGH) {
        points += (transactionAmount - REWARD_THRESHOLD_HIGH) * REWARD_RATE_HIGH;
        points += (REWARD_THRESHOLD_HIGH - REWARD_THRESHOLD_MEDIUM) * REWARD_RATE_MEDIUM;
    } else if (transactionAmount > REWARD_THRESHOLD_MEDIUM) {
        points += (transactionAmount - REWARD_THRESHOLD_MEDIUM) * REWARD_RATE_MEDIUM;
    }

    return points;
};

export const calculateTotalPointsForCustomer = (customerTransactions) => {
    return customerTransactions.reduce((totalPoints, transaction) => {
        return totalPoints + calculateTransactionPoints(transaction.amount);
    }, 0);
};

const getCurrentMonth = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed, so we add 1
    return `${currentYear}-${String(currentMonth).padStart(2, '0')}`;
};

export const calculatePointsForLastMonth = (customerTransactions) => {
    const lastMonth = getCurrentMonth();

    return customerTransactions
        .filter(transaction => transaction.date.startsWith(lastMonth))
        .reduce((totalPoints, transaction) => {
            return totalPoints + calculateTransactionPoints(transaction.amount);
        }, 0);
};