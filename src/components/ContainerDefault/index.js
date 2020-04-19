import React, {memo} from 'react';

import {Container} from './styles';

function ContainerDefault({children}) {
  return <Container>{children}</Container>;
}

export default memo(ContainerDefault);
