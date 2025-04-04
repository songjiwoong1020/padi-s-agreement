//page를 나타내기 위한 해당 page 최상위 컴포넌트
'use client';

import Wrap from "@/app/_common/Wrap";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content2";

export default function Group() {
  return (
    <>
      <Wrap checkbox={false}>
        <Content1 />
      </Wrap>
      <hr/>
      <Wrap checkbox={true}>
        <Content2 />
      </Wrap>
      <hr/>
      <Wrap checkbox={true}>
        <Content3 />
      </Wrap>
      <button className="submit-btn" id="submitBtn" disabled >다음</button>
    </>
  )
}