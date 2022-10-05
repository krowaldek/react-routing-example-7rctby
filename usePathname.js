import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

const usePathname = () => {
  const { pathname } = useLocation();
  const [path, setPath] = useState(null);
  console.log('pathname', pathname);
  useEffect(() => {
    console.log('pathname', pathname);
    setPath(pathname);
  }, [pathname]);
  return {
    path,
  };
};

export default usePathname;
