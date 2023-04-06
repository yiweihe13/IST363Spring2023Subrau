import Container from './Container';
import Heading from './Heading';
import Paragraph from './Paragraph';
import styles from './locationpicker.module.scss';

const LocationPicker = () => {
    return<section className ={styles.locationPicker}>
        <Container>
            <Heading level={2}>
                love is here
            </Heading>
            <Paragraph>
            Location picker goes here.
            </Paragraph>
            
        </Container>
    </section>
}
export default LocationPicker;