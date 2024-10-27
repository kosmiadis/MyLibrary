import LinksList from "./LinksList";

export default function DesktopHeader ({ links }) {
    return <LinksList links={links} isMobile={false}/>
}