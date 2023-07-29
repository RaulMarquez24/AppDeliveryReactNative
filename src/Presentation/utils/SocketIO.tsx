import { io } from "socket.io-client";
import { apiUrl } from "../../Data/sources/remote/api/ApiDelivery";

const socket = io(`${apiUrl}/orders/delivery`);

export default socket;