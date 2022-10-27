import { useContext, useEffect } from 'react';
import { SubmissionContext } from '../components/SnoopForm/SnoopForm';

interface Props {
  name: string;
  pageName: string;
  defaultValue?: string | number | string[];
}

function useDefaultValue({ pageName, name, defaultValue }: Props) {
  const { setSubmission } = useContext(SubmissionContext);

  useEffect(() => {
    setSubmission((submission: any) => {
      const newSubmission = { ...submission };
      if (!(pageName in newSubmission)) {
        newSubmission[pageName] = {};
      }
      newSubmission[pageName][name] = defaultValue || '';
      return newSubmission;
    });
  }, []);

  return;
}

export default useDefaultValue;
