import { DashboardContext } from "./dashboard"

export default function OrdersCard(){

    const dashboard = useContext(DashboardContext)
    const ordersTotal = dashboard.ordersTotal

    const handleAddOrder = ()=>{
        dashboard.setOrdersTotal(ordersTotal + 1)
    }

    return (
        <div>
            Total Orders: ${ordersTotal}
            <div>
                <button onClick={handleAddOrder}>Add Order</button>
            </div>
        </div>
    )
}