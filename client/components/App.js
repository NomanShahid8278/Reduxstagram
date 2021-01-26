import  {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../actions/actionCreators'
import Main from './Main'

const mapStateToProps = (state)=>{
    return {
        posts: state.posts,
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators(actionCreators,dispatch)
}
const App = connect(mapStateToProps,mapDispatchToProps)(Main)// connect combine data and it actually pass all data from mapStateToProps and mapDispatchToProps to Main component

export default App