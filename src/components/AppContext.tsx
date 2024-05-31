import React from "react";

type AppContextType = {};

const defaultContextValue: AppContextType = {};

const AppContext = React.createContext<AppContextType>(defaultContextValue);

export default AppContext;
