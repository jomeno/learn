
// Remember to export the created context so that it is
// accessible by the components that need to use it 
export const DashboardContext = createContext({})

export default function Dashboard(){
    
    const [salesTotal, setSalesTotal] = useState(0)
    const [ordersTotal, setOrdersTotal] = useState(0)
    
    // Notice that the Dashboard component wraps all children needing the shared states 
    // within the DashboardContext.Provider. See performance notes about the value prop.
    return (
        <DashboardContext.Provider value={{ 
            salesTotal, 
            setSalesTotal, 
            ordersTotal, 
            setOrdersTotal
        }}>
            <div>
                <h3>Total Revenue: {salesTotal + ordersTotal}</h3>
                |
                <SalesCard/> | <OrdersCard/>
            </div>
        </DashboardContext.Provider>
    )
}
