import photo from "../../images/Ellipse 8.png"
import { CustomAuth, CustomInfo, SpanName, SpanPosition } from "./Auth.styles"

const Auth = () => {
    return (
        <CustomAuth>
            <img src={photo} alt="" />
            <CustomInfo>
                <SpanName>Evano</SpanName>
                <SpanPosition>Project Manager</SpanPosition>
            </CustomInfo>
        </CustomAuth>
    )
}

export default Auth