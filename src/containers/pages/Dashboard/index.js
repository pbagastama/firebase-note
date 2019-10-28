import React, {Component, Fragment} from 'react';
import './dashboard.scss';
import { addDataToAPI, getDataFormAPI } from '../../../config/redux/action';
import { connect } from 'react-redux';



class Dashboard extends Component{
    state = {
        title: '',
        content: '',
        date: ''
    }

    componentDidMount(){
        const userData = JSON.parse(localStorage.getItem('userData'));
        this.props.getNotes(userData.uid)
        // const userData = localStorage.getItem('userData')
        // console.log('Dashboard : ', JSON.parse(userData))
    }

    handleSavedNotes = () => {
        const {title, content} = this.state;
        const {saveNotes} = this.props;
        const userData = JSON.parse(localStorage.getItem('userData'))

        const data = {
            title: title,
            content: content,
            date: new Date().getTime(),
            userId: userData.uid
        }
        saveNotes(data)
        console.log('Simpan', this.props)
        console.log(data)
    }

    onInputChange = (e, type) => {
        this.setState({
            [type]: e.target.value
        })
    }

    render(){
        const { title, content, date } = this.state;
        const { notes } = this.props;
        console.log('Notes: ', notes); 
        return(
            <div className="container">
                <div className="input-form">
                    <input className="input-title" placeholder="title" value={title} onChange={(e) => this.onInputChange(e, 'title')}></input>
                    <textarea className="input-content" placeholder="content" value={content} onChange={(e) => this.onInputChange(e, 'content')}></textarea>
                    <button className="save-btn" onClick={this.handleSavedNotes}>Simpan</button>
                </div>
                <hr/>
                {
                    notes.length > 0 ? (
                        <Fragment>
                            {
                                notes.map(note => {
                                    return(
                                        <div className="card-content" key={note.id}>
                                            <p className="title">{note.data.title}</p>
                                            <p className="date">{note.data.date}</p>
                                            <p className="content">{note.data.content}</p>
                                        </div>
                                    )
                                })
                            }
                        </Fragment>    
                    ) : null
                }

            </div>
        )
    }
}

const reduxState = (state) => ({
    userData: state.user,
    notes: state.notes
})

const reduxDispatch = (dispatch) => ({
    saveNotes: (data) => dispatch(addDataToAPI(data)),
    getNotes: (data) => dispatch(getDataFormAPI(data))
})

export default connect(reduxState, reduxDispatch) (Dashboard); 