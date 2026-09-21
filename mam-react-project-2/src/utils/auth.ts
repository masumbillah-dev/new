import { redirect } from "react-router";

function checkToken(){
    const token = localStorage.getItem('bearer_token');
    (token?.split("."));
}

export const needToLogin = () => {
    const token = localStorage.getItem('bearer_token');
    if (!token) return redirect('/login');
    return null;
};

export const loggedIn = () => {
    const token =localStorage.getItem('bearer_token');
    
    if(token) return redirect('/');
    return null
};