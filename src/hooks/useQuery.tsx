import { useLocation } from 'react-router-dom';

// REVIEW: Hook para obteners los parametros de URl
export function useQuery() {
  return new URLSearchParams(useLocation().search);
}
