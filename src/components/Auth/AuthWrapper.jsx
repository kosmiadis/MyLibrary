export default function AuthWrapper ({title, children}) {
    return <div className="max-w-[350px] mx-auto mt-[50px]">
        <h1 className="text-xl mb-[10px] font-specialFont font-bold text-primaryForeground ">{title}</h1>
        {children}
    </div>
}