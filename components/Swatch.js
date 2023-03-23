

const Swatch =({ color })=>{
    return <li 
    className={styles.swatch}
    style ={{backgroundColor: color.hex}}
    onClick={clickHandler}
    >{color.name}</li>
}
export default Swatch;