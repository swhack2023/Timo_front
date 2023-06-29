import { useAnimationFrame } from "framer-motion";
import React, {useRef} from 'react';
import Rc from '../img/Rc.png';

function Component() {
  const ref = useRef(null);

  useAnimationFrame((time, delta) => {
    ref.current.style.transform = `rotateY(${time}deg)`;
  });

  return <div ref={ref}><img src={Rc} alt="Rc" /></div>;
}

export default Component;
