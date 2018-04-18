import { translate } from 'react-i18next';

const withTranslate = Component =>
  translate(['common', 'home', 'login', 'taskboard'])(Component);

export default withTranslate;
