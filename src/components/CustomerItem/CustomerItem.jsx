import { CustomCustomerItem, StatusWrapper } from "./CustomerItem.styles"

const CustomerItem = ({ customer: { name, company, phone, email, country, status, } }) => {
    return (
        <CustomCustomerItem>
            <span>{name}</span>
            <span>{company}</span>
            <span>{phone}</span>
            <span>{email}</span>
            <span>{country}</span>
            <StatusWrapper>
                <button disabled={status === 'Active'}>{status}</button>
            </StatusWrapper>
        </CustomCustomerItem>
    )
}

export default CustomerItem