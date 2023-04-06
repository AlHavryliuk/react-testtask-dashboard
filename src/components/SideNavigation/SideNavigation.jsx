import { dataNavigation } from 'data/navMenuData'
import icon from '../../images/sprites.svg'
import { CustomSideNavigation, CustonNavItem } from "./SideNavigation.styles"

const SideNavigation = () => {

    return (
        <CustomSideNavigation>
            {dataNavigation.map(({ name, svg }) => <CustonNavItem key={name} >
                <svg width={24} height={24}>
                    <use href={`${icon}#${svg}`}></use>
                </svg>
                <span>{name}</span>
            </CustonNavItem>)}
        </CustomSideNavigation>
    )
}

export default SideNavigation