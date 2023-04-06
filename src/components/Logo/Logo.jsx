import BurgerMenu from "components/BurgerMenu/BurgerMenu"
import { useDispatch, useSelector } from "react-redux"
import { openMenu } from "store/burgerReducer/burgerSlice"
import { select } from "store/selector/selector"
import svg from '../../images/sprites.svg'
import { CustomLogo, LogoWrapper } from "./Logo.styles"

const Logo = () => {
    const dispatch = useDispatch()
    const popupIsOpen = useSelector(select.burgerMenuIsOpen)

    const handleOpenBurgerPopup = () => {
        console.log(popupIsOpen);
        dispatch(openMenu())
    }

    return (
        <LogoWrapper>
            <svg width={37} height={37}>
                <use href={`${svg}#icon-setting`}></use>
            </svg>
            <CustomLogo>Dashboard</CustomLogo>
            <svg width={37} height={37} onClick={handleOpenBurgerPopup}>
                <use href={`${svg}#icon-paragraph`}></use>
            </svg>
            {popupIsOpen && <BurgerMenu />}
        </LogoWrapper>
    )
}

export default Logo