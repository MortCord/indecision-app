class VisibilityToogle extends React.Component{
    constructor(){
        this.handleToogleVisibility = this.handleToogleVisibility.bind(this);
        this.state={
            visibility:false
        }
    }

    handleToogleVisibility(){
        this.setState((prevState) => {
            return{
             visibility:!prevState.visibility
            } 
         });
    }

    render(){
        return(
            <div>
                <h1>Visibility Toogle</h1>
                <button onClick={this.handleToogleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Details</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToogle />, document.getElementById('app'))

// const appRoot = document.getElementById('app');
// let isTrue = false;
// const det = () =>{
//     if(isTrue == false){
//         document.getElementById('but').innerHTML="Hide details";
//         document.getElementById('details').innerHTML="There is some details";
//         isTrue = true;
//     }else{
//         document.getElementById('but').innerHTML="Show details";
//         document.getElementById('details').innerHTML="";
//         isTrue = false;
//     }
// }
// const renderApp = () =>{
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button id="but" onClick={det}>Show details</button>
//             <p id="details"></p>
//         </div>
//     )
//     ReactDOM.render(template, appRoot);
// }
// renderApp();