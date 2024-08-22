import { DashboardContext } from "./dashboard"

export default function SalesCard(){

    const dashboard = useContext(DashboardContext)
    const salesTotal = dashboard.salesTotal

    const handleAddSale = ()=>{
        dashboard.setSalesTotal(salesTotal + 1)
    }

    return (
        <div>
            Total Sales: ${salesTotal}
            <div>
                <button onClick={handleAddSale}>Add Sale</button>
            </div>
            
        </div>
    )
}