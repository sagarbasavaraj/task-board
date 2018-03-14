import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Material UI components
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import { Span } from '../common';

import { signOutUser } from '../reducers/actions/login-actions';

class UserInfo extends PureComponent {
  static propTypes = {
    user: PropTypes.object,
    className: PropTypes.string,
    signOutUser: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.handleMenuItemChange = this.handleMenuItemChange.bind(this);
  }

  handleMenuItemChange(event, value) {
    const { signOutUser } = this.props;
    switch (value) {
      case 'logout': {
        signOutUser();
        break;
      }
      default:
        break;
    }
  }

  render() {
    const { user, className } = this.props;
    return (
      <div className={`l-user-info ${className ? className : ''}`}>
        <Avatar className="l-user-img" src="" />
        <label className="l-user-email">{user.email}</label>
        <IconMenu
          onChange={this.handleMenuItemChange}
          iconButtonElement={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          <MenuItem value="logout">
            <Span msg="nav.logout" />
          </MenuItem>
        </IconMenu>
      </div>
    );
  }
}

export default connect(undefined, { signOutUser })(UserInfo);
