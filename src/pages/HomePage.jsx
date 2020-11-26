import React from 'react'
import {useApi} from './../hooks/useApi'

const HomePage = () => {
    const [data, setData] = useApi()
    return (
        <div>
            Home
        </div>
    )
}

export default HomePage
