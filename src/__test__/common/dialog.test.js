import React from 'react';
import { configure, shallow } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Adapter from 'enzyme-adapter-react-16';

import '../../../__mocks__/reacti18nextMock';
import { Dialog } from '../../common';

configure({ adapter: new Adapter() });

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
