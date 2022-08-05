
import Nav from '../Back/Nav';
import FrontContext from './FrontContext';
import FrontNav from './Nav';
//import axios from 'axios';
//import { authConfig } from '../../Functions/auth';


function Front({show}) {
  
        return (
            <FrontContext.Provider value={{
             
            

            }}>

{
                show === '/' ?
                    <>
                    
                    <Nav/>
                    
                   
            
                    </>
                    : 
                        show === 'story' ? <div>Crud</div>: null
            }
               <FrontNav/>
               <div className="container">
                    <div className="row">
              
            
               </div>
               </div>
               <div className="container">
               
                
                    <div className="row">
                
                    </div>
              
               </div>
            </FrontContext.Provider>
        )
    }
export default Front;