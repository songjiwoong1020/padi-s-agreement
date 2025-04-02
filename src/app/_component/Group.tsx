'use client';

import Wrap from "./wrap";
import Button from "./button";
import { page1_title1, page1_title2, page1_title3 } from "../_asset/titles.json";
import Page1_content1 from "../_asset/page1content1";
import Page1_content2 from "../_asset/page1content2";
import Page1_content3 from "../_asset/page1content3";
import { FormEventHandler, useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Notes from "./Testservercomponent";

export default function Group() {

  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const router = useRouter();
  
  useEffect(() => {
    if(agree1 && agree2){
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [agree1, agree2]);

  const onSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    router.push('/page2');
  }
  return (
    <form onSubmit={onSubmit}>
      <Notes/>
      <Wrap title={page1_title1} content={<Page1_content1/>} useAgree={false}/>
      <hr/>
      <Wrap title={page1_title2} content={<Page1_content2/>} useAgree={true} setAgree={setAgree1}/>
      <hr/>
      <Wrap title={page1_title3} content={<Page1_content3/>} useAgree={true} setAgree={setAgree2}/>
      <Button text="다음" disabled={disabled} />
    </form>
  );
}