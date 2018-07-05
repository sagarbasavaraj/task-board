import React from 'react';
import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import '../../../../__mocks__/reacti18nextMock';
import { Header } from '../../../common';

configure({ adapter: new Adapter() });

describe('<Header />', () => {
  it('should render <h1 /> element', () => {
    const wrapper = shallow(<Header text="test" />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
  it('should render <h1 /> with given class name', () => {
    const wrapper = shallow(<Header text="test" className="l-header" />);
    expect(wrapper.find('h1.l-header')).toHaveLength(1);
  });
});
