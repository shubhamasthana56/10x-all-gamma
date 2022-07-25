 import React, {createContext, useState} from 'react';
 const DarkThemeContext = createContext();
 const AuthenticationContext = createContext()

function DarkThemeProvider(props) {
  const [theme, setTheme] = useState(true);
  //true for light false dark
  const toggleTheme = ()=> {
    setTheme(!theme);
  }
  return (
      <>
        <DarkThemeContext.Provider value={{theme, toggleTheme, abc: "test"}}>
            {props.children}
        </DarkThemeContext.Provider>
      </>
  )
}

function AuthenticationProvider(props) {
    const [isLogin, setLogin] = useState(false);
    const userAuthetication = ()=> {
        setLogin(!isLogin)
    }
    return (
        <>
            <AuthenticationContext.Provider value={{isLogin, userAuthetication}}>
                {props.children}
            </AuthenticationContext.Provider>
        </>
    )
}

export {DarkThemeContext, DarkThemeProvider, AuthenticationContext, AuthenticationProvider};