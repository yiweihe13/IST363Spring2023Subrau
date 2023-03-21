import {useState} from 'react';
import NavOverlay from './NavOverlay';
import styles from './header.module.css';
import Button from './button';

const Header =() =>{
    const [isMenuVisible, setMenuVisible] = useState(false);
    return <header className={styles.header}> 
        <Button 
            label="Menu" 
           clickHandler={()=>{
            setMenuVisible(true)
            
           }}
        />
        {isMenuVisible && 
            <NavOverlay 
                closeHandler={()=>{
                    setMenuVisible(false);
                }} 
            />
        }
    </header>
}
export default Header