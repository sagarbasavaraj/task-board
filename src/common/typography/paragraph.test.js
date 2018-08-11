import React from 'react';
import { shallow } from 'enzyme';

import Paragraph from './paragraph';

describe('<Paragraph />', () => {
  it('should render <p/> element', () => {
    const wrapper = shallow(<Paragraph text="test" />);
    expect(wrapper.find('p')).toHaveLength(1);
  });
  it('should render <p/> element with given class name', () => {
    const wrapper = shallow(<Paragraph text="test" className="l-paragraph" />);
    expect(wrapper.find('p.l-paragraph')).toHaveLength(1);
  });
});
