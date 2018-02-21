import { translate } from 'react-i18next';

const withTranslate = Component => translate(['common', 'home'])(Component);

export default withTranslate;
