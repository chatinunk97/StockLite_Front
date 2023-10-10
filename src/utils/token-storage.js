const ACCESS_TOKEN = "ACCESS_TOKEN"
export const addAccessToken = (token) => {
    localStorage.setItem(ACCESS_TOKEN, token);
  };
  export const getAccessToken = ()=>{
    return localStorage.getItem(ACCESS_TOKEN)
  }