// import { createContext, useReducer } from "react"
// import reducers from './reducers'


// export const DataContext = createContext()

// export const DataProvider = ( {children} ) => {
//     const initialState = { meci: "", meci2: "", meci3: "", meci4: "", meci5: "", meci6: "", meci7: "" }
//     const [ state, dispatch ] = useReducer( reducers, initialState )

//     return (
//         <DataContext.Provider value={[ state, dispatch ]} >
//             {children}
//         </DataContext.Provider>
//     )
// }