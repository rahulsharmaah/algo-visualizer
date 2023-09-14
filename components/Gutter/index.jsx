import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React from 'react';
import { pageGutterSize } from '../../constants';

const GridRoot = styled(Grid)`
  margin: 0 auto;
`;

function Gutter({ children, justify, xs, md, xl, spacing }) {
  return (
    <GridRoot
      item
      container
      xs={xs || pageGutterSize.xs}
      xl={xl || pageGutterSize.xl}
      md={md}
      spacing={spacing || pageGutterSize.spacing}
      justify={justify}
    >
      {children}
    </GridRoot>
  );
}

export default Gutter;
