
// Remember to export the created context so that it is
// accessible by the components that need to use it 
export const DashboardContext = createContext({})

export default function Dashboard(){
    
    const [salesTotal, setSalesTotal] = useState(0)
    const [ordersTotal, setOrdersTotal] = useState(0)
    
    

    // Notice that the Dashboard components wraps all its children needing the shared state 
    // within the Context.Provider. See performance notes below about the value prop.
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