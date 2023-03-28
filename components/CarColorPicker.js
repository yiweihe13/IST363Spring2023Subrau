import Swatch from './Swatch';
import Swatches from './Swatches';
import {useState} from 'react';
import Image from 'next/image';


const CarColorPicker =( {colors}) =>{
    const [activeColor, setActiveColor] = useState(colors[0]);

    return <div>
        <h2>Color picker</h2>  
        <div>
            <Image 
            src={`/vehicles/crosstrek/colors/crosstrek-${activeColor.slug}.webp`}
            alt={`crosstrek ${activeColor.name}`}
            width={300}
            height={200}
            />
        </div>
        <Swatches colors={colors} />
        <h3>Color name</h3>
    </div>
    

}
export default CarColorPicker;