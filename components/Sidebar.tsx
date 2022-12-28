import { ChildrenProps } from "../types"

const Sidebar = ({ children }: ChildrenProps) => {
  return (
    <div className="bg-black h-screen w-full flex items-right">
      <h1 className="text-white">Sidebar</h1>
      {children}
    </div>
  )
}

export default Sidebar