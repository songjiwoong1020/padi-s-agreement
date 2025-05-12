//page를 나타내기 위한 해당 page 최상위 컴포넌트


'use client';

import Wrap from "@/app/_common/Wrap";
import Button from "@/app/_common/Button";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import { useRef } from "react";
import { useRouter } from 'next/navigation';

const titles = {
  "title1": "PADI Discover Scuba® Diving 수강생 선언문",
  "title2": "초상권 면책 동의서",
  "title3": "개인정보 제공 및 이용 동의서"
}

export default function Group() {
  const checkRef1 = useRef<HTMLInputElement>(null);
  const checkRef2 = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleChange = () => {
    (checkRef1?.current?.checked && checkRef2?.current?.checked) 
    ? buttonRef.current?.removeAttribute('disabled')
    : buttonRef.current?.setAttribute('disabled', 'true');
  }

  const handleClick = () => {
    router.push('/2');
  }

  return (
    <>
      <Wrap title={titles.title1} >
        <Content1 />
      </Wrap>
      <hr/>
      <Wrap
        title={titles.title2}
        showCheckbox
        checkRef={checkRef1}
        handleChange={handleChange}
      >
        <Content2 inputRef={inputRef}/>
      </Wrap>
      <hr/>
      <Wrap
        title={titles.title3}
        showCheckbox
        checkRef={checkRef2}
        handleChange={handleChange}
      >
        <Content3 />
      </Wrap>
      <Button text={'다음'} buttonRef={buttonRef} handleClick={handleClick}/>
    </>
  )
}