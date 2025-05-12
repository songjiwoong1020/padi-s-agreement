interface AgreementContent {
  id: string;
  title: string;
  content: string | React.ReactNode;
  validation?: (value: any) => boolean;
  required?: boolean;
}

const agreementContents: AgreementContent[] = [
  {
    id: 'diving-declaration',
    title: 'PADI Discover Scuba® Diving 수강생 선언문',
    content: '... 선언문 내용 ...',
    required: true
  }
];


// hooks/useAgreements.ts
export const useAgreements = (agreements: AgreementContent[]) => {
  const [agreementStates, setAgreementStates] = useState<Record<string, boolean>>({});
  
  const isAllValid = useCallback(() => {
    return agreements
      .filter(agreement => agreement.required)
      .every(agreement => agreementStates[agreement.id]);
  }, [agreementStates, agreements]);

  const setAgreementState = (id: string, value: boolean) => {
    setAgreementStates(prev => ({...prev, [id]: value}));
  };

  return {
    agreementStates,
    setAgreementState,
    isAllValid
  };
};