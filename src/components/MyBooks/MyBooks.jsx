import useTheme from '../../hooks/useTheme';

export default function MyBooks () {
    const { primaryFont, secondaryForeground} = useTheme();

    const styles = {
        fontFamily: primaryFont,
        color: secondaryForeground
    }
    return <>
        <h1 style={styles} className='text-2xl'>MyBooks</h1>
    </>
}