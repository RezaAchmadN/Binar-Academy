import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAsyncData } from "../reducers/api-store"

const Cars = () => {
    const dispatch = useDispatch()
    const listCarsJson = useSelector(state => state.api.cars)

    useEffect(() => {
        dispatch(getAsyncData())
    }, [dispatch])

    return (
        <>
            <h1>Cars page</h1>
            <div className="row">
                {listCarsJson.map(car => {
                    return (
                        <div key={car.id} className="col-md-2">
                            <img src={car.image} style={{width: "100%"}} alt={car.plate}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Cars