import React from 'react';
import RightSidebar from "../RightSidebar/RightSidebar";
import {Divider} from "@material-ui/core";
import useStyle from './LayoutStyles';
import LeftSideBar from "../LeftSideBar/LeftSideBar"


function Layout(props) {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <RightSidebar/>
            <Divider className={classes.divider} orientation={"vertical"}/>
            <div className={classes.content}>
                {props.children}
            </div>
            <Divider className={classes.divider} orientation={"vertical"}/>
            <LeftSideBar/>
        </div>
    );
}

export default Layout;