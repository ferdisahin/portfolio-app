import {configureStore} from "@reduxjs/toolkit"
import { siteSlice } from "./stores/site"

export default configureStore({
    reducer: {
        site: siteSlice
    }
})