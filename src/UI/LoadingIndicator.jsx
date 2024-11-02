import { useLoadingAnimation } from "../hooks/useLoadingAnimation";

export default function LoadingSpinner({text='Loading'}) {

    const scope = useLoadingAnimation();

    return (
        <div ref={scope} className="flex w-min text-nowrap items-center">
            <p className="text-[25px] font-semibold font-specialFont select-none">
                {text}
            </p>
            <span className="text-accent text-[35px] mb-[8px] font-semibold select-none">.</span>
            <span className="text-accent text-[35px] mb-[8px] font-semibold select-none">.</span>
            <span className="text-accent text-[35px] mb-[8px] font-semibold select-none">.</span>
        </div>
    );
}
