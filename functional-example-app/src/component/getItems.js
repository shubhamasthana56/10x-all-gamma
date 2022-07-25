const initialItems = [{name: "t1", category: "grocery"}, {name: "t2", category: "electronics"},{name: "t3", category: "grocery"},{name: "t4", category: "home-appliances"}];
export const getItems = ()=> {
    new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(initialItems);
        }, 3000)
    })
}