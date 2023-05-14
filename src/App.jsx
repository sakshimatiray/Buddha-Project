
import './App.css';
import myhus from './ajnaani.gif';
import asan from './aasan.gif';
import the from'./thesis.jpg';
import god from "./god.jpg";
import eve from "./evidence.jpg"

function App() {
  
   return (
    <>
  <div className="Maind">
 <div className="main" style={{backgroundImage: `url(https://images.unsplash.com/photo-1640762173501-b3bf25be849c?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2400)` }}>
    <img src={myhus} alt="my-gif" />
    <h1>Effective Buddhism </h1>
     </div>
     <div className='img1'>
      
        
     <img src={the} width="500vh"  height="500vh" />
     <div>
     <h1>Thesis:</h1>
     <p>Buddhism is an amazing philosophy full of wisdom with great truths, however I believe Buddhists have lost the way of the Buddha and lack a real basis of impact. Effective Buddhism is a solution to those who seek to follow the Buddhist Path as Buddha Wanted. If Buddha was alive today, imagine the amount of change and impact he would be having.</p>
      
      </div>
     </div>
     <div className='img2'>
      <div >
        <h1>Evidence:</h1>
        <p>In current Buddhist society, the top Buddhist role models have iron wills, but lack real ACTION or PURPOSE behind this because of a misinterpretation of Dharma. Buddha’s four main vows tell a different story of how the Buddha should act.</p>
      <h3>   The Bodhisattva Vows exist in many different forms; they are chanted as follows:</h3>
      <h5>  1.Creations are numberless, I vow to free them.
     <br/>  2. Delusions are inexhaustible, I vow to transform them.
     <br/>  3. Reality is boundless, I vow to perceive it
     <br/>  4. The awakened way is unsurpassable, I vow to embody it.
</h5>
<h3>It’s also said in this way.</h3>
<h5>
<br/> 1. Living beings are limitless, I vow to liberate them all.

 <br/>2. Blind passions are limitless, I vow to sever them all.

 <br/>3. Dharma gates are inexhaustible, I vow to know them all.

 <br/>4. Unsurpassed is awakening, I vow to realize it.
</h5>
<h3>Or, in the most laymen terms:</h3>
<h5> 1. To save all people

<br/> 2. To renounce all worldly desires

<br/>3. To learn all teachings

<br/> 4. To attain perfect enlightenment</h5>

      </div>
    <img src={eve}/>
     </div>
     <div className='img3'>
     <img src={god} />
     <div>
    
     <h1>Reiterating The Message:</h1>
     <p>Many buddhists today practice the seeking of enlightenment rather than practicing the way of Buddha himself. Buddha was an enlightened being who spread his philosophy far and wide, preaching and changing and influencing the world and his actions live on to this day. </p>
   <p>Buddhists in most countries are seen as people who simply meditate. The idea is to relinquish attachment to earthly desires in order to DO MORE. Not to meditate all day to do nothing. In an effort of learning all teachings, we will re-evaluate the core values, and give a new perspective based on the teachings. The core re-evaluation leads us to the idea that Nirvana is something to achieve in this realm. And that leaving this realm is a negative desire in it of itself.</p>
     </div>
     </div>
     <img src={asan} alt="my-gif" style={{width:"100vw"}}/>
     
</div>  
</>
)
  }

 

export default App;
