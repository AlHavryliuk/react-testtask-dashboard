import { dataNavigation } from "data/navMenuData"
import { CustomBurgerMenu } from "./BurgerMenu.styles"
import { useDispatch } from "react-redux"
import { closeMenu } from "store/burgerReducer/burgerSlice"

const BurgerMenu = () => {
    const dispatch = useDispatch()

    const handleClosePopup = () => {
        dispatch(closeMenu())
    }

    return (
        <CustomBurgerMenu>
            <button onClick={handleClosePopup}>×</button>
            {dataNavigation.map(({ name }) =>
                <li key={name} >
                    <span>{name}</span>
                </li>)}
        </CustomBurgerMenu>
    )
}

export default BurgerMenu