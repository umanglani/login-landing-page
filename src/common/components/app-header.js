import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./app-header.scss";
import Tabs from "./tabs/tabs";

export const homeTabs = [
    {key: 'Projects', title: 'Projects', active: false},
    {key: 'Services', title: 'Services', active: false},
    {key: 'Blogs', title: 'Blogs', active: false},
    {key: 'Contact', title: 'Contact', active: false},
];

const AppHeader = () => {

    return <div className="flex-box-start app-header-container v-center">

        <div className="left">
            <div className="app-title flex-box-start v-baseline">
                <div className="alphabet-icon flex-box-center v-center">B</div>
                loom Marketing</div>
        </div>
        
        <div className="body flex-box-center">
            <Tabs tabList={homeTabs}/>
        </div>

        <div className="right flex-box-end">
            <a className="small ">Sign in / Sign up</a>
            <a className="small green" style={{borderBottom: '4px double'}}>contact for demo</a>
        </div>


        <div className="left row-2">
            <a className="small green">sales@bloommarketing.com</a>
        </div>
        
        <div className="body flex-box-center">
            
        </div>

        <div className="right flex-box-end">
            
        </div>

    </div>
}

export default AppHeader;
