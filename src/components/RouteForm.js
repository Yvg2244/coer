import './RouteForm.css';
import './Plugin.css';
import ToggleModes from './ToogleModes';
function RouteForm(){
    return (
        
    <div className="routeform flex flex-col justify-center align-center fs-500">
        
        <form className="flex flex-col justify-center align-center ">
        <div className="flex flex-col">
        <input type="text" id="from" name="from" placeholder="FROM"/>
        
        <input type="text" id="to" name="to"placeholder="TO"/>
        </div>
        <button className=" text-white fs-50" >SUBMIT</button>
        </form>
    </div>
    );
}
export default RouteForm;