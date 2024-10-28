import { NavLink } from 'react-router-dom';
import useScreenSize from '../../hooks/useScreenSize';

export default function Logo () {
    
  const screenWidth = useScreenSize();

  let classes;
  if (screenWidth >= 976) {
    classes = 'text-3xl text-secondaryForeground hover:text-primaryForeground'
  }
  else {
    classes = 'text-2xl text-primaryForeground hover:text-accent';
  }
  

    return <div className=''>
        <NavLink to='/' className={'transition-colors  font-bold font-specialFont ' + classes}>MyLibrary📚</NavLink>
    </div>
}