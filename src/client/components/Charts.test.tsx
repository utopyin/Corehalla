import React from 'react';
import { shallow } from 'enzyme';
import { BarChart } from './Charts';

describe('BarChart', () => {
    it('should render correctly', () => {
        const component = shallow(<BarChart amount={10} />);
        expect(component).toMatchSnapshot();
    });
    it('should render background correctly', () => {
        const component = shallow(<BarChart amount={12} bg="#123456" />);
        expect(component).toMatchSnapshot();
    });
    it('should render foreground correctly', () => {
        const component = shallow(<BarChart amount={18} fg="#789456" />);
        expect(component).toMatchSnapshot();
    });
    it('should render width correctly', () => {
        const component = shallow(<BarChart amount={99} width="100px" />);
        expect(component).toMatchSnapshot();
    });
    it('should render height correctly', () => {
        const component = shallow(<BarChart amount={15} height="100px" />);
        expect(component).toMatchSnapshot();
    });
});
