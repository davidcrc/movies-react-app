import React, { ReactElement } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

interface Props {}

export default function Spinner({}: Props): ReactElement {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 30 }}>
      <CircularProgress style={{ color: 'white' }} />
    </div>
  );
}
