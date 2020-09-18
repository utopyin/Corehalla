import React from 'react';
import { shallow } from 'enzyme';
import { AppBar } from './AppBar';

describe('AppBar', () => {
    it('should render correctly without args', () => {
        const component = shallow(<AppBar />);
        expect(component).toMatchSnapshot();
    });
    it('should render correctly with tabs', () => {
        const component = shallow(
            <AppBar
                tabs={[
                    { title: 'title', link: 'link', active: true },
                    { title: 'title2', link: 'link2' },
                ]}
            />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should render correctly with chips', () => {
        const component = shallow(
            <AppBar
                chips={[
                    { title: 'title', link: 'link', active: true },
                    { title: 'title2', link: 'link2' },
                ]}
            />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should render correctly with tabs && chips', () => {
        const component = shallow(
            <AppBar
                chips={[
                    { title: 'title', link: 'link', active: true },
                    { title: 'title2', link: 'link2' },
                ]}
            />,
        );
        expect(component).toMatchSnapshot();
    });
});
