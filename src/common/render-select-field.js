import React, { PureComponent } from 'react';
import { func, object, string, arrayOf, shape } from 'prop-types';
import { SelectField, MenuItem } from 'material-ui';
import { map } from 'lodash';
import classnames from 'classnames';

import { resolveDisplayText } from '../helpers/resolveDisplayText';

import withTranslate from './with-translate';

const renderMenuItems = (t, menuItems) => {
  return map(menuItems, ({ label, text, value }) => {
    const primaryText = resolveDisplayText(t, label || text);
    return <MenuItem key={value} value={value} primaryText={primaryText} />;
  });
};

class RenderSelectField extends PureComponent {
  static propTypes = {
    t: func.isRequired,
    className: string,
    input: object,
    label: string,
    text: string,
    errorMsg: string,
    meta: object,
    restProps: object,
    menuItems: arrayOf(
      shape({
        label: string,
        text: string,
        value: string
      })
    ).isRequired
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    const { input } = this.props;
    if (input.onChange) {
      input.onChange(value);
    }
  }

  render() {
    const {
      t,
      input,
      className,
      label,
      text,
      errorMsg,
      field,
      meta,
      menuItems,
      ...restProps
    } = this.props;

    const { touched, error } = meta;
    const resolvedErrorMsg = resolveDisplayText(t, error || errorMsg);
    const floatingLabelText = resolveDisplayText(t, label, text);
    const containerClassName = classnames(className);

    return (
      <div className={containerClassName}>
        <SelectField
          {...input}
          onChange={this.handleChange}
          errorText={touched && resolvedErrorMsg}
          floatingLabelText={floatingLabelText}
          {...restProps}
        >
          {renderMenuItems(t, menuItems)}
        </SelectField>
      </div>
    );
  }
}

export default withTranslate(RenderSelectField);
