
import styles from './navoverlay.module.css';
import Button from './Button';

const NavOverlay =({closeHandler}) =>{
    return <div className={styles.navoverlay}>
        <Button
            label="close"
            clickHandler={closeHandler}
        />
         Nav Overlay goes here.
    </div>

}
export default NavOverlay