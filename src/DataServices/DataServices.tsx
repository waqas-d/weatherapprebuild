import { IcurrWeath } from "../Interfaces/Interfaces"

const apiKey = "47c60285e38b30cccff817c2787514c7";
export const getCurrWeath = async (lat: number, lon: number) => {
    const promise = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    const data: IcurrWeath[] = await promise.json();
    return data[0];

}