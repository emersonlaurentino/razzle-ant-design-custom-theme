import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Icon } from 'antd';
import styles from './empty-content.less';

const Content = ({ className, message, icon, style }) => (
  <div
    className={cn(
      className,
      styles.content,
    )}
    style={style}
  >
    <Icon type={icon} />
    <h3>{message}</h3>
  </div>
);

Content.propTypes = {
  message: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

Content.defaultProps = {
  className: '',
  style: {},
  icon: 'exclamation-circle-o',
  message: 'Não encontrado!',
};

export default Content;
