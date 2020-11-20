import app from './app';

const  PORTA  =  3002 ;

const  server  =
    app.listen ( PORTA ,  ( )  =>  console.log ( `App Ouvindo na porta ${ PORTA } ` ) ) ;


process.on( 'SIGINT' ,  ( )  =>  {
    server.close ( ) ;
    console.log ( 'App finalizado' ) ;
} ) ;