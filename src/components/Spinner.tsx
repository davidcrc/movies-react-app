import React, { ReactElement } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


export default function Spinner(): ReactElement {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 30 }}>
      <CircularProgress style={{ color: 'white' }} />
    </div>
  );
}
