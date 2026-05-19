import prompt from "prompt";
import promptQRcode from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";

async function createQRCode(){
    prompt.get(promptQRcode, handle );

    prompt.start();

}
 


export default createQRCode;