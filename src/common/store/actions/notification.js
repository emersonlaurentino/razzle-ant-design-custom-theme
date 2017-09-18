import { createActions } from 'redux-actions';
import { merge } from 'lodash';
import { notification } from 'antd';
import { v4 } from 'uuid';

const handlePayload = type => (payload) => {
  if (typeof payload === 'string') {
    payload = { message: payload };
  }

  const notifyBody = merge({}, {
    placement: 'bottomRight',
    key: v4(),
  }, payload);

  return notification[type](notifyBody);
};

const { notify } = createActions({
  NOTIFY: {
    BASIC: handlePayload('open'),
    ERROR: handlePayload('error'),
    INFO: handlePayload('info'),
    SUCCESS: handlePayload('success'),
    WARNING: handlePayload('warning'),
  },
});

export default notify;
