import SC from 'soundcloud';
import { CLIENT_ID, REDIRECT_URI } from './../constants/auth';

export default function(){
    SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });
}