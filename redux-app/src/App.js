import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {incNumber,decNumber,userdata} from './action/index';

function App() {
  const mystate=useSelector((state)=>state.changeTheNumber);
  const dispatch=useDispatch();
  dispatch(userdata({
    firstname: 'Ankit',
    lastname: 'pal',
    age: 34
  }, {
    education: 'MCA',
    marks: '80%',
    experience: '8 years'
  }));
  return (
    <>
    <div className="container text-justify">
      <h1>Increament/decrement center</h1>
      <h1>using react and redux</h1>
      <div className="input-group input-group-sm mb-3">
        <div className="input-group-prepend">
          <button type="button" onClick={()=>{dispatch(incNumber(1))}} className="btn btn-primary mx-10">+</button>
          <input type="text" value={mystate} className="text-center" />
          <button type="button" onClick={()=>{dispatch(decNumber(1))}} className="btn btn-primary mx-10">-</button>
        </div>
      </div>
      </div>
    </>
  );
}
export default App;
