import './style.css';
import { ProductPicker } from '../../components/ProductPicker';

export const HomePage = () => {
  return (
    
     <>
        <div className='title-box'>
        <h1>Aktuální nabídka</h1>
        <div className='text-box'>
          <p>Nejnovější prémiové produkty od předních českých designerů.</p>
          <p>Doprava zdarma až k vám domů, na cenu nehleďte.</p>
          </div>
        </div> 
      <ProductPicker />
    </> 
  );
};
