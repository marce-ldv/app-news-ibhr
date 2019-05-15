import { poolPromise } from '../database/connection';

const table = 'news';

export const getNews = async ( req, res, next ) => {
    const sqlGetNews = `select * from ${table}`;
    try{
        const [ rows, _ ] = await poolPromise.query( sqlGetNews );
        res.json( { rows } );
    } catch( e ){
        res.status( 500 ).send();
    }
}

export const getNewsDetail = async ( req, res, next ) => {
    const { id } = req.params;
    console.log('req body', req.body)
    const sqlGetNewsDetails = `select * from ${table} where id = ?`;
    try{
        const [ rows, _ ] = await poolPromise.query( sqlGetNewsDetails, [ parseInt(id) ] );
        if( rows.length > 0 )
            res.status( 200 ).json( rows[0] );
        else
        res.status( 404 ).json( rows[0] );
    }catch( e ){
        console.log('ex: ', e );
        res.status( 500 ).send();
    }
}

export const createNews = () => {
    
}

export const updateNews = () => {
    
}

export const deleteNews = () => {
    
}
