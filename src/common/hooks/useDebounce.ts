import { useEffect, useState } from 'react';
import { Option } from '../../store';

export const useDebounce = (value: Option | string, delay = 500) => {
  const [debounsed, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounsed;
};
