import {createSlice} from "@reduxjs/toolkit"

export const siteSlice = createSlice({
    name: 'site',
    initialState: {
        darkMode: false,
        language: 'EN'
    },
    reducers: {
        setDarkMode: state => {
            state.darkMode = !state.darkMode
            // localStorage.setItem('darkmode', !state.darkMode)
        },
        setLanguage: (state, action) => {
            state.language = action.payload
        }
    }
})