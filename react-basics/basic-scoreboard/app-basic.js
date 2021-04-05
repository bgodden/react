// const title = React.createElement (
//     'h1',
//     { id: 'main-title', title: 'This is  title' },
//     'My First React Element!'
// );
//
// const desc = React.createElement (
//     'p',
//     null,
//     'I just learned how to create a React node and render in the DOM, y\'all!'
// );
//
// const header = React.createElement (
//     'header',
//     null,
//     title,
//     desc
// );

const desc = 'I just learned how to create a React node and render in the DOM, y\'all!';
const myTitleID = 'main-title';
const name = "Jimbo";

const header = (
    <header>
        {/* This is a
         comment
         */}
        <h1 id={ myTitleID }> { name }'s First React Element!</h1>
        <p className="main-desc">{ desc }</p>
    </header>
);


ReactDOM.render(
    header,
    document.getElementById('root')
);

