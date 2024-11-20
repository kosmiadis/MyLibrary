import { useLoadingAnimation } from '../animationHooks/useLoadingAnimation';

export default function LoadingIndicator ({text='Loading'}) {

    const scope = useLoadingAnimation();

    return (
        <div ref={scope} className="flex w-min text-nowrap items-center">
            <p className="text-[22px] font-semibold font-specialFont select-none">
                {text}
            </p>
            <span className="ml-[0.4px] text-accent text-[35px] mb-[12px] font-semibold select-none">.</span>
            <span className="text-accent text-[35px] mb-[12px] font-semibold select-none">.</span>
            <span className="text-accent text-[35px] mb-[12px] font-semibold select-none">.</span>
        </div>
    );
}
