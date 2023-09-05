import {AppI} from "./enum";
import {App} from "./index";

export class server{
    server=new App()
constructor(){
    this.server.app.listen(this.server.app.get(AppI.PORT),()=>{
        console.log("server is ready on port:"+ this.server.app.get(AppI.PORT))
    })
}
}

new server()