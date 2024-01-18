import { calculateTransactionPoints, calculatePointsForLastMonth } from '../pointCalculator';

describe('calculateTransactionPoints', () => {
    it('calculates points correctly for transactions above high threshold', () => {
        const points = calculateTransactionPoints(150);
        expect(points).toEqual(150);
    });

    it('calculates points correctly for transactions between medium and high thresholds', () => {
        const points = calculateTransactionPoints(80);
        expect(points).toEqual(30);
    });

    it('returns 0 points for transactions below medium threshold', () => {
        const points = calculateTransactionPoints(40);
        expect(points).toEqual(0);
    });
});

describe('calculatePointsForLastMonth', () => {
    const mockTransactions = [
        { amount: 120, date: '2023-12-15T10:30:00' },
        { amount: 75, date: '2024-01-16T15:45:00' },
        { amount: 50, date: '2023-11-14T08:00:00' },
    ];

    it('calculates points for transactions of the last month only', () => {
        const points = calculatePointsForLastMonth(mockTransactions);
        expect(points).toEqual(25);
    });

    it('returns 0 points if there are no transactions in the last month', () => {
        const points = calculatePointsForLastMonth([]);
        expect(points).toEqual(0);
    });
});
