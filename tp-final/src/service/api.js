const BASE_URL = "http://localhost:8080"

export async function loginRequest({ email, password}) {
    console.log(`email : ${email} password : ${password}` )
    const res = await fetch(`${BASE_URL}/api/auth/login`,{
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({email,password})
    });

    if(!res.ok){
        const msg = await res.text();
        throw new Error(`Login fail ${res.status} ${msg}`)
    }
    
    return res.json();
}

export async function registerRequest({ email, password}) {
    console.log(`email : ${email} password : ${password}` )
    const res = await fetch(`${BASE_URL}/api/auth/register`,{
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({email,password})
    });

    if(!res.ok){
        const msg = await res.text();
        throw new Error(`Login fail ${res.status} ${msg}`)
    }

    return res.json();
}
