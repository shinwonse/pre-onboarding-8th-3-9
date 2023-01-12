import { useState } from 'react';

import './assets/base.scss';
import { useFetch } from './hooks/useFetch';

function App() {
  const [focus, setFocus] = useState(false);
  const [keyword, setKeyword] = useState('');

  const url =
    keyword && `${process.env.REACT_APP_SERVER_URL}/sick?q=${keyword}`;
  const { data: searchResult } = useFetch(url);

  return (
    <div className="App">
      <div className="main-contents">
        <h1 className="title">{`국내 모든 임상시험 검색하고\n온라인으로 참여하기`}</h1>
        <div className={!focus ? 'search-contents' : 'search-contents focus'}>
          <input
            type="text"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className={!keyword ? 'search-input' : 'search-input keyword'}
            placeholder={!focus ? '질환명을 입력해 주세요' : ''}
          />
          <button className="search-cancel" />
          <button onClick={() => useFetch(url)} className="search-handler" />
        </div>
      </div>
      결
    </div>
  );
}

export default App;
