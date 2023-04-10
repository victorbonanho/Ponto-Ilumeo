import { useEffect } from "react"
import { dataUser } from "../components/db/db"
import { IGetHoras } from "./types"

const GetHoras = ({setData}: IGetHoras) => {

    let controller = 1
    useEffect(() => {
        if(controller === 1){
            setData(dataUser)
        }
        controller++
    }, [setData, dataUser])

    return (
        <>

        </>
    )

}

export default GetHoras