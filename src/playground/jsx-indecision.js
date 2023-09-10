console.log('hi');

const app = {
    title: 'Title',
    subtitle: 'subtitle',
    options: []
}

const onFormSubmit = (e) =>{
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
}

const reset = () =>{
    app.options.length = 0;
    renderApp();
}

// const nums = [55, 101, 1000];

const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum];
    alert(option);
}

const renderApp = () =>{
    const template = ( 
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle ? app.subtitle: <p>app.subtitle</p>}
            {app.options.length > 0 ? <p>Here are your options: {app.options}</p>:<p>No options</p>}
            <p>{app.options.length}</p>
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
            {
                // nums.map((num) =>{
                //   return <p key={num}>Number: {num}</p>  
                // })
            }
            
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
                <button onClick={reset}>Remove All</button>
                
            </form>
        </div>
        );
        
        const appRoot = document.getElementById('app');
        
        ReactDOM.render(template, appRoot);
}

renderApp();

