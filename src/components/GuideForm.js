import './GuideForm.css';
import './Plugin.css';

function GuideForm(){
    return (
    <div className="guideform flex flex-col justify-center align-center fs-500">
        <form className="flex flex-col  justify-center align-center">
        
        <input type="text" id="from" name="from" placeholder="CITY"/>
        
        
        <button className=" text-white fs-50"  >SUBMIT</button>
        </form>
    </div>
    );
}
export default GuideForm;