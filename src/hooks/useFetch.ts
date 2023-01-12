import { useEffect, useRef, useReducer } from 'react';

type dataType = {
  sickCd: string;
  sickNm: string;
};

type stateType = {
  status: string;
  data: dataType[] | undefined;
  error?: null | [];
};

type actionType = {
  type: string;
  payload?: [];
};

type cacheTYPE = {
  [key: string]: [];
};

export const useFetch = (url: string) => {
  const cache = useRef<cacheTYPE>({});

  const initialState: stateType = {
    status: 'idle',
    error: null,
    data: [],
  };

  const [state, dispatch] = useReducer(
    (state: stateType, action: actionType) => {
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
    },
    initialState
  );

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
        console.log('data', data);
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
