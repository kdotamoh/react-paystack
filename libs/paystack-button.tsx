import React, {ReactNode} from 'react';
import usePaystackPayment from './use-paystack';
import {callback, PaystackProps} from './types';

interface PaystackButtonProps extends PaystackProps {
  text?: string;
  className?: string;
  children?: ReactNode;
  onSuccess?: callback;
  onClose?: callback;
}

const PaystackButton = ({
  text,
  className,
  children,
  onSuccess,
  onClose,
  ...others
}: PaystackButtonProps): JSX.Element => {
  const initializePayment = usePaystackPayment(others);
  return (
    <button
      className={className}
      onClick={(e): void => {
        e.preventDefault();
        initializePayment(onSuccess, onClose);
      }}
    >
      {text || children}
    </button>
  );
};

export default PaystackButton;
