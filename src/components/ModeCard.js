import './Plugin.css';
import './ModeCard.css'
import ModeCardItem from './ModeCardItem';
function ModeCard(){
    return (
        <div className='text-dark'>
            <ModeCardItem mode="car" price="10"></ModeCardItem>
            </div>
    );
}
export default ModeCard;