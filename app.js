// const posts = [
//     {title: 'Post One', body: 'This is post one'},
//     {title: 'Post Two', body: 'This is post Two'},
// ];
//
//
// function createPost(post){
//     setTimeout(function(){
//         posts.push(post); //add onto posts object array above
//     }, 2000);
// }
//
//
// function getPosts (){
//     setTimeout(function(){
//         let output = '';
//
//         posts.forEach(function(post){
//     output += `<li>${post.title}</li>`;
//         });
//
//         document.body.innerHTML = output;
//
//     }, 1000);
//
// }
//
// createPost( {title: 'Post Three', body: 'This is post three'});
//
// getPosts();//displays Post One
//                 //Post Two //we get the two posts above only. no post three creted by createPost function. we use callbacks to couner that.get post was called synchroniously,a second before post was created. hus post three does not appear. to counter this, we use call backs through  calling createPosts asychroniusly
// //shown below


const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post One', body: 'This is post one'},
];

//in es6 promiseswedont use callbacks. promises replace callbacks
function createPosts(post){
    return new Promise(function(resolve,reject){ //  <- this is how you create a promise, resolve is what we call when we are done with what we are doing. refject is what we call when there is an error we want to throw
        setTimeout(function(){
            posts.push(post);

            const error = false; //use a flag to test for error . if flag = true we get an error msg, Error: something went wrong

            if(!error){
                resolve();

            } else {
                reject("Error: something went wrong " );
            }

        }, 2000);

    });

}


function getPosts (){
    setTimeout(function(){
        let output = '';

        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;

    }, 1000);

}

createPosts({title: 'Post Three', body: 'This is post three'}).then(getPosts).catch(function(error){ //to get a promise from a  response we use .then() insead respnseTYpe
    console.log(error); // .catch used to catch the error
}); /* //if no error displays below
    Post One
Post One
Post Three

*/
