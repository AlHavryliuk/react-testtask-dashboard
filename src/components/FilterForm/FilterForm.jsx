import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setKeyWord } from 'store/filterReducer/filterSlice';
import search from '../../images/sprites.svg';
import { CustomFilterForm, CustomFilterInput } from "./FilterForm.styles";

const FilterForm = () => {
    const ref = useRef(null)
    const dispatch = useDispatch()

    const handleSetKeyWord = () => {
        dispatch(setKeyWord(ref.current.value))
    }

    return (
        <CustomFilterForm>
            <svg width={24} height={24}>
                <use href={`${search}#icon-search`}></use>
            </svg>
            <CustomFilterInput type="text" ref={ref} placeholder="Search" onChange={handleSetKeyWord} />
        </CustomFilterForm>
    )
}

export default FilterForm