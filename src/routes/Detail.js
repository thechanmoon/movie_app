import React from 'react'

// function Detail(props)
// {
//     console.log('details')
//     console.log(props)
//     // return(<div>Detail</div>)
//     return(<span>Detail</span>)
// }
class Detail extends React.Component{
    
    componentDidMount()
    {
        const {location:{state},history} = this.props;
        // const {location:{state,history}} = this.props;

        // console.log(this.props);
        // console.log(state);
        console.log(history);

        // if(!state) history.goBack();
        // if(!state) history.goForward();

        if(!state) history.push("/")
        
        // return (state? null : history.push("/") );

    }
    
    render(){
        const {location:{state}} = this.props;
        return<div>{state&&state.title}</div>
    }
}


export default Detail;