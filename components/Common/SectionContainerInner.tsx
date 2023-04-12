type Props = {
  children?: React.ReactNode;
  classname?: string;
  title?: string;
  link?: string;
};

const SectionContainerInner = ({ children, classname, title, link }: Props) => {
  return (
    <>
      <div className={`${classname} flex w-full justify-between items-center`}>
        <h1 className="text-lg uppercase pl-3">{title}</h1>
        <div className="flex flex-row items-baseline space-x-4 pr-4">
          <a href={link} className="text-dark cursor-pointer">
            See More
          </a>
        </div>
      </div>
      <div className="flex flex-col w-full items-center">
        <div className="flex w-full justify-between items-center">{children}</div>
      </div>
    </>
  );
};

export default SectionContainerInner;
