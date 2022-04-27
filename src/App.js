import './App.css';
import Second from './Second';
import Third from './Third';
import {createStore} from 'redux';
// lets create a central store first here in createstore we need to pass a reducer as 1 argument and initialstate as 2(also we can pass enhancer middlewares as 2 argument we will check it later)
const initialState={name:"Harsh",work:"Fullstack developer"}
// reducer is just a functin whose1st parameter is state and 2 one is action
const reducer = (state=initialState,action)=>{
  console.log("inside reducer",state)
  console.log("Action inside reducer",action.type == "CHAPRI")

  // lets create a switch statement to return state according to type property
  
  // okay my fault here in switch
  switch(action.type)
  {
  case "CHAPRI":
    return {...state,name:'King_Harsh'}
    break
   case "PLAYBOY":
    return {...state,name:'Diljala_Harsh'}
    break
   case "FAKE":
    return {...state,name:'Angel Priya'}
    break
    default:
     return {...state,name:'Harsh'}

  }
 
}
export const store = createStore(reducer)
// leta add a store subscriber to listen to state change
store.subscribe(()=>{
  console.log("State change ====",store.getState())
})
function App() {
  return (
    <div>
    {/*now we want to access a state defined in app.js in our second.js and third.js file*/}
    
   {/*now i want to access it without passing as prop so here comes the redux part*/}
    <Second/>
    <Third/>
    </div>
  );
}

export default App;
