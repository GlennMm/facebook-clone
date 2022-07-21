import Image from "next/image";

export default function SidebarRow({ Icon, title, src }) {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rouned-xl cursor-pointer">
      { src && ( <Image src={src} className="rounded-full" width={30} height={30} layout="fixed" alt={title} /> ) } 
      { Icon && <Icon className="h-8 aspect-square text-blue-500" /> }
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  )
}
