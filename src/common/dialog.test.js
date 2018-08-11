import React from 'react';
import { shallow } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Dialog from './dialog';

describe('<Dialog />', () => {
  it('should render MuiDialog element', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <Dialog text="test" open={false} />
      </MuiThemeProvider>
    );
    expect(wrapper.find('Dialog')).toHaveLength(1);
  });
  it('should render children', () => {
    const wrapper = shallow(
      <MuiThemeProvider>
        <Dialog text="test" open={false}>
          <p>test</p>
        </Dialog>
      </MuiThemeProvider>
    );
    expect(wrapper.find('p')).toHaveLength(1);
  });
});
