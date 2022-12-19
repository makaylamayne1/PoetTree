export const getComments = async()=>{
    return[
        {
            id:"1", 
            body:"first comment",
            userId:"1",
            parentId:null,
            createdAt:"time",
            username:"Makayla",
        },
    ]
}

export const createComment = async(text, parentId=null)=>{
    return{
        id:Math.random().toString(36).substr(2,9),
        body:text, 
        parentId,
        userId:"1",
        username:"John",
        createdAt: new Date().toISOString(),
    };
};