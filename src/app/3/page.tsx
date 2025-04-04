import { page3_title1 } from "../_asset/titles.json";
import Wrap from "../_common/_wrap";
import Button from "../_common/button";
import Page3_content1 from "../_asset/page2content1";

export default function Page3() {
  return (
    <div>
      <Wrap title={page3_title1} content={<Page3_content1/>} useAgree={false}/>
      <hr/>
      {/* <Button text="다음" disabled={false} onclick={()=>{}}/> */}
    </div>
  );
}
