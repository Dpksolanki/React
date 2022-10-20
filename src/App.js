import "./App.css";
import Deepak from "./component/Deepak";
import TextForm from "./component/TextForm";

function App() {
  return (
    <>
<Deepak title='Texttile'/>

<div className="container" >
  <div className="mt-3">
<TextForm heading="Enter The Text to Analysis Below"/>
</div>
</div>
</>
  );
}


export default App;
