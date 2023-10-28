export default async function CommonAPISelect(url,data) {
    const reqbody = {
        method: "POST",
        headers: { 
            Accept: 'application/json', 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
    return fetch(url,reqbody)
    .then(res => res.json())
    .then(res => {
        if(res.Output){
            return res; 
          }else{
            return { Output: res };
          }
    })
    .catch((error) => {
        if (error) console.log(error)
    })

  }