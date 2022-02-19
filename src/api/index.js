import axios from "axios";

const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData=async(sw,ne)=>{
    try {
        const {data:{data}} =await axios.get(URL,{
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'f8d312180emsh57e023f5c3fd226p1c6efbjsn3af78408d25c'
          }
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}

