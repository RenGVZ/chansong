import { ChildrenProps } from '../../types';

const SectionContainerOuter = ({ children }: ChildrenProps) => {
  return <div className="w-full flex flex-col shadow-cust rounded-[10px] space-y-4 py-4 px-6">{children}</div>;
};

export default SectionContainerOuter;
