import { TouchableOpacity } from "react-native";
import Textwhite from "./textwhite";

export default Boton = ({ onPress }) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <Textwhite texto="Detalles"></Textwhite>
        </TouchableOpacity>
    )
};    