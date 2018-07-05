import React from 'react';
import { configure, mount } from 'enzyme';
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

  it('should render button of type flat ', () => {
    const wrapper = mount(
      <MuiThemeProvider>
        <Button text="test" btnType="flat" />
      </MuiThemeProvider>
    );
    expect(wrapper.find('FlatButton')).toHaveLength(1);
  });

  it('should invoke click event handler', () => {
    const mockFunc = jest.fn();
    const wrapper = mount(
      <MuiThemeProvider>
        <Button text="test" onClick={mockFunc} />
      </MuiThemeProvider>
    );
    wrapper.find('button').simulate('click');
    expect(mockFunc).toHaveBeenCalled();
  });
});
