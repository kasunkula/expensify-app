import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const ret = selectExpensesTotal([]);
    expect(ret).toBe(0);
})

test('should corectly add up a single expenses', () => {
    const ret = selectExpensesTotal([expenses[0]]);
    expect(ret).toBe(195);
})

test('should corectly add up multiple expenses', () => {
    const ret = selectExpensesTotal(expenses);
    expect(ret).toBe(114195);
})