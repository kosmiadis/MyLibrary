export default function PageContent ({ screenWidth, children }) {

    let classes = screenWidth > 976 ? 'p-4' : 'p-2';

    return <main className={classes}>
        {children}
    </main>
}