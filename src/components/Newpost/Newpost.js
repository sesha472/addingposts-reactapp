

import React from 'react';
import './Newpost.css';


class Newpost extends React.Component{
    state={
        title:"",
        content:"",
        author:"sesha"
    };

    render(){
    return(
        <div className="Newpost">
            <h1>Add a post</h1>
            <label>Title</label>
            <input type="text" value={this.state.title} onChange={(e)=>this.setState({title:e.target.value})} />
            <label>Content</label>
            <textarea row="4" value={this.state.content} onChange={(e)=>{this.setState({content:e.target.value})}}></textarea>
            <label>Author</label>
            <select value={this.state.author} onChange={(e)=>{this.setState({author:e.target.value})}}>
                <option value="sesha">sesha</option>
                <option value="sai">sai</option>

                 </select>
                 <button>Add</button>

        </div>
    );
};
}
export default Newpost;