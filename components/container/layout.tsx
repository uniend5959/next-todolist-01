
// 화면 크기에 따라, width 값이 유동적으로 변화는 컴포넌트  
type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 md:px-8 lg:px-12">
      <div
        className="w-full 
        max-w-[100%] 
        sm:max-w-[640px] 
        md:max-w-[768px] 
        lg:max-w-[1024px] 
        xl:max-w-[1240px]"
      >
        {children}
      </div>
    </div>
  );
  
};

export default Layout