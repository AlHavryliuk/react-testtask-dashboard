import { CustomSubContainer } from "./SubContainer.styles"

const SubContainer = ({ children }) => {
    return (
        <>
            <CustomSubContainer>{children}</CustomSubContainer>
        </>
    )
}

export default SubContainer