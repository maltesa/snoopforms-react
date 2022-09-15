import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { classNamesConcat } from '../../lib/utils';
import {
  CurrentPageContext,
  SchemaContext,
  SubmitHandlerContext,
} from '../SnoopForm/SnoopForm';
import {secondsToHms} from '../../lib/utils'

import useCountDown from 'react-countdown-hook';

export const PageContext = createContext('');

interface Props {
  name: string;
  className?: string;
  children?: ReactNode;
  thankyou?: boolean;
  initialTime?: number;
  countDown?: boolean;
  startDate: Date
}

export const SnoopPage: FC<Props> = ({

  name,
  className,
  children,
  thankyou,
  initialTime=3600,
  countDown,
  startDate
}) => {
  const { schema, setSchema } = useContext<any>(SchemaContext);
  const handleSubmit = useContext(SubmitHandlerContext);
  const [initializing, setInitializing] = useState(true);
  const { currentPageIdx } = useContext(CurrentPageContext);



  const [timeLeft, { start }] = useCountDown(initialTime * 1000, 1000);

  React.useEffect(() => {
    if (countDown) {
      start();
    }
  }, []);


  if (timeLeft/1000 === 1) {
    console.log("toto");
    handleSubmit(name)
  } 
  
  useEffect(() => {
    setSchema((schema: any) => {
      const newSchema = { ...schema };
      let pageIdx = newSchema.pages.findIndex((p: any) => p.name === name);
      if (pageIdx !== -1) {
        console.warn(
          `🦝 SnoopForms: Page with the name "${name}" already exists`
        );
        return newSchema;
      }
      newSchema.pages.push({
        name,
        type: thankyou ? 'thankyou' : 'form',
        elements: [],
      });

      return newSchema;
    });
  }, [name]);

  useEffect(() => {
    if (initializing) {
      let pageIdx = schema.pages.findIndex((p: any) => p.name === name);
      if (pageIdx !== -1) {
        setInitializing(false);
      }
    }
  }, [schema]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(name);
  };

  if (initializing) {
    return <div />;
  }

  if (thankyou) {
    return (
      <PageContext.Provider value={name}>
        {currentPageIdx ===
          schema.pages.findIndex((p: any) => p.name === name) && children}
      </PageContext.Provider>
    );
  } else {
    return (
      <PageContext.Provider value={name}>
        <p>{secondsToHms(timeLeft/1000)}</p>

        <form
          className={classNamesConcat(
            currentPageIdx ===
              schema.pages.findIndex((p: any) => p.name === name)
              ? 'block'
              : 'hidden',
            'space-y-6',
            className
          )}
          onSubmit={onSubmit}
        >
          {children}
        </form>
      </PageContext.Provider>
    );
  }
};
