import Auth from 'components/Auth/Auth'
import Logo from 'components/Logo/Logo'
import SideNavigation from 'components/SideNavigation/SideNavigation'
import { CustomSideBar } from './SideBar.styled'

const SideBar = () => {
    return (
        <CustomSideBar>
            <Logo />
            <SideNavigation />
            <Auth />
        </CustomSideBar>
    )
}

export default SideBar