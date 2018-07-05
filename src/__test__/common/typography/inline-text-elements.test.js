import React from 'react';
import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import '../../../../__mocks__/reacti18nextMock';
import { Span } from '../../../common';

configure({ adapter: new Adapter() });

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
