import React, { FC } from 'react';
import { classNamesConcat } from '../../lib/utils';
import { ClassNames } from '../../types';

interface Props {
  label?: string;
  classNames?: ClassNames;
}

export const TimerBubble: FC<Props> = ({ classNames, label }) => {
  return (
      <div
        className={classNamesConcat('px-3 py-3 text-sm font-medium shadow-sm rounded-full text-white', classNames?.button)}
      >
        {label || 'Submit'}
      </div>
  );
};
