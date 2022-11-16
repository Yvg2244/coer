import './GuideForm.css';
import './Plugin.css';

function GuideForm(){
    return (
    <div className="guideform flex flex-row justify-center align-center fs-500">
        <form>
        
        <input type="text" id="from" name="from" placeholder="CITY"/>
        
        
        <button >SUBMIT</button>
        </form>
    </div>
    );
}
export default GuideForm;