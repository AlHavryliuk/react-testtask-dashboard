import CustomerItem from "components/CustomerItem/CustomerItem"
import FilterForm from "components/FilterForm/FilterForm"
import Paginations from "components/Paginations/Paginations"
import { useSelector } from "react-redux"
import { reselect } from "store/selector/selector"
import { CustomCustomerBlock, CustomFooter, CustomerHeaderWrapper, CustomerList, TitleWrapper } from "./CustomerBlock.styles"

const CustomerBlock = () => {

    const customers = useSelector(reselect.filterCusomer)

    return (
        <CustomCustomerBlock>
            <CustomerHeaderWrapper>
                <TitleWrapper>
                    <h3>All Customers</h3>
                    <h4>Active Members</h4>
                </TitleWrapper>
                <FilterForm />
            </CustomerHeaderWrapper>
            <CustomerList>
                <li>
                    <h5>Customer Name</h5>
                    <h5>Company</h5>
                    <h5>Phone Number</h5>
                    <h5>Email</h5>
                    <h5>Country</h5>
                    <h5>Status</h5>
                </li>
                {customers.map((customer) => <CustomerItem key={customer.id} customer={customer} />)}
            </CustomerList>
            <CustomFooter>
                <h5>Showing data 1 to 8 of  256K entries</h5>
                <Paginations />
            </CustomFooter>
        </CustomCustomerBlock>
    )
}

export default CustomerBlock