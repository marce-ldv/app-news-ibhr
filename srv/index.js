import express from 'express';
import morgan from 'morgan';
import news from './news';
// import socketIO from "socket.io";

export default (app, http) => {

  app.set( 'port', process.env.PORTS || 5000 );
  app.use( morgan( 'dev' ) );
  // app.use(express.urlencoded({ extended: false }));
  app.use( express.json( { extended: true } ) );

  app.use( '/news', news );

  app.get('/',( req, res ) => {
    res.send('works');
  })


  app.listen(app.get('port'), () => {
      console.log(`Listen on port `, app.get('port'));
  })

}
