import { useMemo } from 'react';

import { statusbarHeight } from '@utils/statusbar-height.util';

const useStatusbarHeight = () => {
  const height = useMemo(() => statusbarHeight(), []);

  return height;
};

export default useStatusbarHeight;
