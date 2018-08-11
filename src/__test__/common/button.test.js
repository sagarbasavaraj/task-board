import React from 'react';
import { mount } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Button } from '../../common';

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
