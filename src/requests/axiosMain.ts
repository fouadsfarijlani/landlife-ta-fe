import axios from "axios";
import { CONSTANTS } from "../lib";

export default axios.create({
    baseURL: CONSTANTS.base_url,
});