import { configureStore } from "@reduxjs/toolkit"
import app from '@redux'

const store = configureStore({
    reducer: {
        'app': app,
    }
})

export default store