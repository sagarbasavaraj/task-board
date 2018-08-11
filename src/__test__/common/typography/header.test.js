import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../../../common';

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
