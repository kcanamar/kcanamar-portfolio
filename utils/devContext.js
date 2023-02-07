import { createContext, useContext } from "react";
// Create Context Object
const DevContext = createContext(null);
// Export Provider 
export default function DevProvider(props){
    const { value, children} = props

    return (
        <DevContext.Provider value={{ value }} >
            {children}
        </DevContext.Provider>
    )
}
// Export useContext Hook.
export function useDevContext(){
    return useContext(DevContext);
}
