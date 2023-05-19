import React, { FC } from 'react';
import { classNamesConcat } from '../../lib/utils';
import { ClassNames } from '../../types';

interface Props {
  linkTo: string;
  label?: string;
  classNames?: ClassNames;
}

export const ButtonLink: FC<Props> = ({ classNames, label, linkTo }) => {
  return (
    <a href={linkTo}>
      <span
        className={classNamesConcat(
          classNames?.button ||
            'inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white border border-transparent rounded-md shadow-sm bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500'
        )}
      >
        {label || 'Submit'}
      </span>
    </a>
  );
};
