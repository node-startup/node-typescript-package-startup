export const getLocalTime = ()=>{
  return new Date().toLocaleString()
}

type UsernameFn= (firstname: string, lastname: string)=>string

export const username: UsernameFn = (firstname, lastname) => firstname + lastname