export interface IcurrWeath {
    coord: {
        lon: number
        lat: number
    },
    weather:
    {

        main: string
        description: string
        icon: string
    },
    main: {
        temp: number
        temp_min: number
        temp_max: number
    }

}

export interface IcurrWeathProps {
    coord: {
        currLon: number
        currLat: number
    },
    weather:
    {

        currMain: string
        currDescription: string
        currIcon: string
    },
    main: {
        currTemp: number
        currTemp_min: number
        currTemp_max: number
    }

}