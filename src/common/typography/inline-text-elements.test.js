import React from 'react';
import { shallow } from 'enzyme';

import Span from './inline-text-elements';

describe('<Span />', () => {
  it('should render <span/> element', () => {
    const wrapper = shallow(<Span text="test" />);
    expect(wrapper.find('span')).toHaveLength(1);
  });
  it('should render <span /> element with given class name', () => {
    const wrapper = shallow(<Span text="test" className="l-inline" />);
    expect(wrapper.find('span.l-inline')).toHaveLength(1);
  });
});
