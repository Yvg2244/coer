import './RouteForm.css';
import './Plugin.css';

function RouteForm(){
    return (
    <div className="routeform flex flex-row justify-center align-center fs-500">
        <form>
        
        <input type="text" id="from" name="from" placeholder="FROM"/>
        
        <input type="text" id="to" name="to"placeholder="TO"/>
        
        <button >SUBMIT</button>
        </form>
    </div>
    );
}
export default RouteForm;