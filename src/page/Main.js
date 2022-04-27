import React, { useState, useCallback } from "react";
import Header from "../components/Header";
import Button from "../elements/Button";
import Input from "../elements/Input";
import _ from "lodash";
import { KakaoMap } from "../shared/KakaoMap";

const Main = () => {
  const [keyword, setKeyword] = useState(null);
  const [search, setSearch] = useState(null);

  const searchWord = useCallback(
    _.debounce((e) => {
      setKeyword(e.target.value);
    }, 100),
    []
  );

  const onClick = () => {
    if (!keyword) {
      return alert("검색어를 입력해주세요");
    }
    setSearch(keyword);
  };

  return (
    <>
      <div>
        <Input width="300px" margin="0 230px" _onChange={searchWord} />
        <Button width="100px" margin="0 230px" _onClick={onClick}>
          검색
        </Button>
        <KakaoMap
          width="800px"
          height="800px"
          margin="10px auto"
          keyword={search}
        />
      </div>
    </>
  );
};

export default Main;
