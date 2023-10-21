import { Outlet } from "react-router-dom";
import BasicFooter from "./Footer/Footer";
import BasicHeader from "./Header/Header";

function Layout(){
    return (
        <>
            <BasicHeader/>
            <Outlet/> {/*ㄴ 현재주소가 가르키고 있는 걸 가져옴 */}
            <BasicFooter/>
        </>
    );
}

export default Layout;