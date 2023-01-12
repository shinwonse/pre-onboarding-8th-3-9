import { useEffect, useRef, useReducer } from 'react';

type stateType = {
  status: string;
  error?: string | null;
  data?: actionType[];
};

type actionType = {
  type: string;
  payload?: [];
};

export const useFetch = (url: string) => {
  const cache = useRef<any>({});

  const initialState = {
    status: 'idle',
    error: null,
    data: [],
  };

  const [state, dispatch] = useReducer((state: any, action: actionType) => {
    switch (action.type) {
      case 'FETCHING':
        return { ...initialState, status: 'fetching' };
      case 'FETCHED':
        return { ...initialState, status: 'fetched', data: action.payload };
      case 'FETCH_ERROR':
        return { ...initialState, status: 'error', error: action.payload };
      default:
        return state;
    }
  }, initialState);

  useEffect(() => {
    let cancelRequest = false;

    if (!url || !url.trim()) {
      dispatch({ type: 'FETCHED', payload: [] });
      return function cleanup() {
        cancelRequest = true;
      };
    }

    const fetchData = async () => {
      dispatch({ type: 'FETCHING' });
      if (cache.current[url]) {
        console.info(
          '%ccalling cache',
          'background: radial-gradient(red, green, blue); padding: 1px;'
        );
        const data = cache.current[url];
        dispatch({ type: 'FETCHED', payload: data });
      } else {
        console.info(
          '%ccalling api',
          'background: radial-gradient(red, green, blue); padding: 1px;'
        );
        const response = await fetch(url);
        const data = await response.json();
        cache.current[url] = data;
        if (cancelRequest) return;
        dispatch({ type: 'FETCHED', payload: data });
      }
    };

    fetchData();
    return function cleanup() {
      cancelRequest = true;
    };
  }, [url]);

  return state;
};
