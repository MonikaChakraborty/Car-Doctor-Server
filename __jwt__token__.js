/**
 * 
 * -------------------------------------------
 *              MAKE API SECURE
 * -------------------------------------------
 * 
 * The person who should have access
 * 
 * concept:
 * 1. assign two tokens for each person (access token, refresh token)
 * 
 * 2. access tokens contains: user identification (email, user's role, etc.). valid for a shorter duration
 * 
 * 3. refresh token is used: to recreate an access token that was expired. (if access token is invalid then it can be remade using refresh token)
 * 
 * 4. If refresh is invalid then logout the user
 * 
 * 
 * 
 * */ 




/**
 * 
 * 
 * 1. jwt ---> json web token (set up)
 * 
 * 2. Generate a token by using jwt.sign
 * 
 * 3. create api, set to cookie. httpOnly, secure, sameSite
 * 
 * 4. from client side: axios withCredentials true (when using fetch, use credentials true)
 * 
 * 5. cors setup, origin (site url) and credentials: true
 * 
 * 
 * 
 * */ 




/**
 * 
 * FOR SECURE API CALLS
 * 
 * 1. on the server side: install cookie parser and use it as a middleware
 * 
 * 2. req.cookies (we will get cookies in the requests)
 * 
 * 3. on the client side: make api call using axios withCredentials: true (or credentials include while using fetch)
 * 
 * */ 