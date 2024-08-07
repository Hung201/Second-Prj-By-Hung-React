import 'react-pro-sidebar/dist/css/styles.css';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';

import { MdOutlineDashboard, MdOutlineFeaturedPlayList } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
// import sidebarBg from '../../assets/bg2.jpg';
import { Link } from 'react-router-dom';


const SideBar = (props) => {
    const { image, collapsed, toggled, handleToggleSidebar } = props;
    return (
        <>
            <ProSidebar
                // image={MdOutlineDashboard}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        EMT
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle" >
                        <MenuItem
                            icon={<MdOutlineDashboard />}
                            suffix={<span className="badge red">New</span>}
                        >
                            Dashboard
                            <Link to="/admin" />
                        </MenuItem>
                        <SubMenu
                            suffix={<span className="badge yellow">3</span>}
                            icon={<MdOutlineFeaturedPlayList />}
                            title='Features'
                        >
                            <MenuItem icon={<FaUsers />}>
                                Manage users
                                <Link to="/admin/manage-users" />
                            </MenuItem>
                            <MenuItem> Manage quizs </MenuItem>
                            <MenuItem> Manage questions</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://github.com/azouaoui-med/react-pro-sidebar"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                            {/* <FaGithub /> */}
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                viewSource
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    )
}

export default SideBar;