/* eslint-disable no-labels */
/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodo } from '../actions/TodoAction';

class Todos extends Component{

    componentDidMount(){
        this.props.fetchTodo()
    }

    render(){
        const todoItems = this.props.posts.map(post => {
            console.log('post',post);
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        })
        return(
            <div>
                {todoItems}
            </div>
        )
    }
}


const mapStateToProps = state => {
    posts: state.posts.items;
}
export default connect(mapStateToProps,{fetchTodo})(Todos)