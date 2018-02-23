import React, { Component } from 'react';

import Dragdrop from './dragdrop';



class Admin extends Component{
    constructor(props){
        super(props);

        this.state={

        }
    }
    render(){
        return(
                <div className="main_area">
                    <div className="sidebar">
                        <div className="logo">

                        </div>
                        <ul className="pro_item">
                            <li className="pro">K-Mit</li>
                            <li className="pro">Project1</li>
                            <li className="proj">Project2</li>
                            <li className="proj">Project3</li>
                        </ul>
                    </div>
                    <div className="com_name">
                        <h2>K-Mit</h2>
                    </div>

                    <div className="navbar">
                        <ul className="nav_list">
                            <button className="butt">Proj.Name</button>
                            <button className="butt">Duration</button>
                            <button className="butt">Completion%</button>
                            <button className="butt">To-Do List</button>
                            <button className="butt">Reviews</button>
                        </ul>

                    </div>

                    <Dragdrop />
                </div>

        );
    }
}
export default Admin;
