import { page2_title1, page2_title2 } from "../_asset/titles.json";
import Wrap from "../_common/_wrap";
import Button from "../_common/Button";
import Input from "../_common/input";
import Page2_content1 from "../_asset/page2content1";
import Page2_content2 from "../_asset/page2content2";

export default function Page2() {
  return (
    <div>
      <Wrap title={page2_title1} content={<Page2_content1/>} useAgree={false}/>
      <hr/>
      <Wrap title={page2_title2} content={<Page2_content2/>} useAgree={false}/>
      <Input label="영문이름" type="text"/>
      <Input label="휴대폰번호" type="tel"/>
      <Input label="E-MAIL" type="email"/>
      <Input label="생년 월 일" type="date"/>
      <Input label="주소" type="text"/>
      {/* <Button text="다음" disabled={false} onclick={()=>{}}/> */}
    </div>
  );
}
