import { OnRpcRequestHandler } from '@metamask/snap-types';

export const onRpcRequest: OnRpcRequestHandler = ({ origin, request }) => {
  switch (request.method) {
    case 'hello':
      return wallet.request({
        method: 'snap_notify',
        params: [
          {
            type: 'inapp',
            message: `Hello, ${origin}!`,
          },
        ],
      });
    default:
      throw new Error('Method not found.');
  }
};
