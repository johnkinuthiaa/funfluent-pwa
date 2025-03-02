import HexagonIcon from '@mui/icons-material/Hexagon';
import PaidIcon from '@mui/icons-material/Paid';
import "./styles/stats.css"
const Stats =()=>{
    return(
        <div className={"stats__container"}>
            <div className={"stat__holder"}>
                <div className={"level__logo"}>
                    <HexagonIcon/>
                </div>
                <div className={"level"}>
                    <p>Level 3</p>
                    <div>lev</div>
                </div>
            </div>
            <div className={"coins__container"}>
                <div className={"stat__holder"}>
                    <div className={"coin"}>
                        <PaidIcon/>
                    </div>
                    <p>28</p>
                </div>
                <div className={"stat__holder"}>
                    <p>Eng</p>
                </div>
            </div>
        </div>
    )
}
export default Stats