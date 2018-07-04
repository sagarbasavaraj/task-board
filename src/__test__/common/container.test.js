import React from 'react';
import { configure, shallow } from 'enzyme';

import { Container } from '../../common';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Container />', () => {
  it('should render div container element with given class name', () => {
    const wrapper = shallow(<Container className="container" />);
    expect(wrapper.find('div.container')).toHaveLength(1);
  });
  it('should render passed children', () => {
    const wrapper = shallow(
      <Container className="container">
        <p>child of container</p>
      </Container>
    );
    expect(wrapper.find('p')).toHaveLength(1);
  });
});
