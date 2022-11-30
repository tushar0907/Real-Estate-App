import axios from "axios";

export const baseUrl="https://bayut.p.rapidapi.com"



export const fetchApi=async (url) => {
      const {data}=await axios.get((url), {
            headers: {
                  'X-RapidAPI-Key': '8edce7a24cmsh679064fd6c00291p102d3ajsn73bf208c006d',
                  'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
            }
      })
}