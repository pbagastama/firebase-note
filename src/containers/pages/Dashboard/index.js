import React, {Component} from 'react';
import './dashboard.scss'
import { addDataToAPI } from '../../../config/redux/action';
import { connect } from 'react-redux';


class Dashboard extends Component{
    state = {
        title: '',
        content: '',
        date: ''
    }
    handleSavedNotes = () => {
        const {title, content} = this.state;
        const {saveNotes} = this.props;

        const data = {
            title: title,
            content: content,
            date: new Date().getTime(),
            userId: this.props.userData.uid
        }
        saveNotes(data)
        console.log(data)
    }

    onInputChange = (e, type) => {
        this.setState({
            [type]: e.target.value
        })
    }

    render(){
        const { title, content, date } = this.state;
        return(
            <div className="container">
                <div className="input-form">
                    <input className="input-title" placeholder="title" value={title} onChange={(e) => this.onInputChange(e, 'title')}></input>
                    <textarea className="input-content" placeholder="content" value={content} onChange={(e) => this.onInputChange(e, 'content')}></textarea>
                    <button className="save-btn" onClick={this.handleSavedNotes}>Simpan</button>
                </div>
                <hr/>

                <div className="card-content">
                    <p className="title">Title</p>
                    <p className="date">21 Sep 2019</p>
                    <p className="content">Content Notes</p>
                </div>

            </div>
        )
    }
}

const reduxState = (state) => ({
    userData: state.user
})

const reduxDispatch = (dispatch) => ({
    saveNotes: (data) => dispatch(addDataToAPI(data))
})

export default connect(reduxState, reduxDispatch) (Dashboard); 