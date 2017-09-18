import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Icon } from 'antd';
import styles from './content.less';

const Content = ({ className, children, style, loading, full, column }) => (
  <div
    className={cn(
      className,
      styles.content,
      !full ? styles.width : '',
      column && styles.column,
      loading && styles.loading,
    )}
    style={style}
  >
    {loading ? (<Icon type="loading" className={styles.loadingIcon} />) : children}
  </div>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  full: PropTypes.bool,
  column: PropTypes.bool,
  loading: PropTypes.bool,
  style: PropTypes.object,
};

Content.defaultProps = {
  className: '',
  full: false,
  column: false,
  loading: false,
  marged: true,
  style: {},
};

export default Content;
