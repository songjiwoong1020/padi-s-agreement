import styles from '@/app/_common/common.module.css';

export default function Content2 () {
  return (
    <>
      <b>수중사진, 지상사진, 동영상 초상권 면책 동의서</b><br/>
      본인(수강생 이름).<input className={styles['name-input']} placeholder="홍길동"/>은(는) 스킨 스쿠버 다이빙 진행 중, 촬영된 수중사진,
      지상사진, 동영상 에 대한 초상권, 저작권이 본 프로그램을 제공하는 시설, <span className={styles['text-em']}>성산 스쿠버 리조트</span> 또는,
      <span className={styles['text-em']}>PADI Americos, Inc.,</span> 및 그 계열사 또는 자회사 각 회사의 직원 간부, 에이전트 또는 양수인 (이하
      "면책당사자"라 칭함)에게 있음을 이해하고 동의한다.<br/>
      <b>수중 사진, 동영상 은 E-mail로 발송되며, 보관기간은 1달(30일)러 지정, 삭제되어 어떠한 요청에도
      이후에 취득할 수 없는 것에 동의한다.</b><br/>
      지상사진, 동영상 은 본 프로그램을 제공하는 시설, <span className={styles['text-em']}>성산 스쿠버 리조트</span>의 홈페이지(카페)에 등록되
      며, 직접 다운로드하여 취득, 본 프로그램을 제공하는 시설, <span className={styles['text-em']}>성산 스쿠버 리조트</span>에서 따로 제공되지는
      않는 것에 동의한다. 단, 본인의 의사에 의하여 성산 스쿠버 리조트 홈페이지(카페)에 <b>삭제요청이 가능</b>한 것을 명시한다.
    </>
  )
}