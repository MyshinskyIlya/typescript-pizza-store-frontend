import axios from "axios";
import { Pizza } from "../redux/types/RootState";

export const fetchPizzas = async () => {
    const response = await axios.get<Pizza[]>(
        "https://run.mocky.io/v3/93447e44-5c8a-4ce7-892a-1671b96f2904"
    );

    return response;
};

// ?mocky-delay=1s

// https://run.mocky.io/v3/93447e44-5c8a-4ce7-892a-1671b96f2904
