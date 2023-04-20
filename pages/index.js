import { useState } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import Image from 'next/image';
import Layout from '../components/Layout';

import Showcase from '../components/Showcase';
import LocationPicker from '../components/LocationPicker.js';
import SectionCTA from '../components/SectionCTA';

import { 
  //getAllVehicles, 
  //getAllColors
 } from '../lib/api';

import CarColorPicker from '../components/CarColorPicker';

export async function getStaticProps() {
    // Get external data from the file system, API, DB, etc.
    //const data = getAllVehicles();
    //const colors = getAllColors();
    
    // The value of the 'props' key will be
    // passed to the 'Home' component
  return {
      props: {
        //data,
        //colors
    }    
  }
}
const Homepage = ({
  //data, c
  //olors
}) => {
  //console.log({data});
  return <Layout>
    
    {
      //<Showcase />
    //<LocationPicker />
    //<CarColorPicker colors={colors}/>
    //<SectionCTA />
    } 
    </Layout>
}
export default Homepage