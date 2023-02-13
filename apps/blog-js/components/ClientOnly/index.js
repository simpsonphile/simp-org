import { useEffect, useState } from 'react';

const ClientOnly = ({ children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === 'object') setShow(true);
  }, []);

  if (!show) return null;

  return children;
};

export default ClientOnly;
