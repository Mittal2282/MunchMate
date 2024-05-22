/* <div id="parent">

    <div id="child1">
        <h1>I am h1 tag from child 1</h1>
        <h2>I am h2 tag from child 1</h2>
    </div>

    <div id="child2">
        <h1>I am h1 tag from child 2</h1>
        <h2>I am h2 tag from child 2</h2>
    </div>

</div> */

const heading2=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"I am a h1 tag from child 1"),
        React.createElement("h2",{},"I am a h2 tag from child 1"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I am a h1 tag from child 2"),
        React.createElement("h2",{},"I am a h2 tag from child 2"),
    ]),
]);

const heading=React.createElement("h1",{id:"heading"},"Hello World From React!");
// heading is an object and not a heading tag yet
// second argument for createElement is attributes to the tag

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading2);
// render method is responsible for converting that object into heading tag and show on the browser
