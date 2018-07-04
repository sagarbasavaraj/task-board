import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Adapter from 'enzyme-adapter-react-16';

import '../../../__mocks__/reacti18nextMock';
import { Button } from '../../common';

configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('should render button element', () => {
    const wrapper = mount(
      <MuiThemeProvider>
        <Button text="test" />
      </MuiThemeProvider>
    );
    expect(wrapper.find('button')).toHaveLength(1);
  });
});
