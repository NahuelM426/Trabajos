import app from './app'
import {startConnction} from './datebase'

 async function main(){
    startConnction();
    await app.listen(app.get('port'));
    console.log('Puerto de Servidor',app.get('port'))
}

main();