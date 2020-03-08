import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render summary for 1 expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render summary for multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={3} expensesTotal={43343432}/>);
    expect(wrapper).toMatchSnapshot();
 });