import React from 'react';
import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import '../../../../__mocks__/reacti18nextMock';
import { Paragraph } from '../../../common';

configure({ adapter: new Adapter() });

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
