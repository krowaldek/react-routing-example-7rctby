import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

const useHash = () => {
  const { hash } = useLocation();
  const [innerHash, setInnerHash] = useState(null);

  useEffect(() => {
    setInnerHash(hash);
  }, [hash]);
  return {
    innerHash,
  };
};

export default useHash;
