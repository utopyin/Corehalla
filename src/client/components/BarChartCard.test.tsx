import React from 'react';
import { shallow } from 'enzyme';
import { BarChartCard } from './BarChartCard';

describe('BarChartCard', () => {
    it('should render correctly with no stats', () => {
        const component = shallow(<BarChartCard title="barchart" stats={[]} />);
        expect(component).toMatchSnapshot();
    });
    it('should render correctly with stats', () => {
        const component = shallow(<BarChartCard title="barchart" stats={[{ title: 'stats', amount: 30, max: 40 }]} />);
        expect(component).toMatchSnapshot();
    });
});
