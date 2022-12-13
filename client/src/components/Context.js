import { createContext, useReducer } from "react"

export const AppContext = createContext()

export default function ContextProvider({children}) {

    const reducer = (state, action) => {

        switch (action.type) {

            case ('login'):
        }
    }

const [state, dispatch] = useReducer(reducer, {
    user: {},

})

return <AppContext.Provider value={{state, dispatch}}>
    {children}
</AppContext.Provider>
}
              