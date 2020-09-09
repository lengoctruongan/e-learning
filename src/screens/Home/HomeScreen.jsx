import React, { Component } from 'react'
import CoureItems from '../../components/CoureItems/CoureItems'
import Axios from  'axios'
import { connect } from 'react-redux'
import Detail from '../Detail/Detail'
 class HomeScreen extends Component {
    render() {
        return (
            <div className="container">
                <h1>Danh sách khóa học</h1>
                <div className="row">
                        {
                            this.props.coureList?.map((item,index)=>{
                                
                                return(
                                    <CoureItems item={item} key={index}/>
                                );
                                
                            })
                        }
                </div>
                <Detail/>
            </div>
        )
    }
    componentDidMount() {
        Axios({
            method:"GET",
            url:"http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"
        }).then(res=>{
            this.props.dispatch({
                type:"Fetch_Data",
                payload:res.data

                
            })
        }).catch(err=>{
            console.log(err)
        })
    }
    


}
export default connect(state=>({
    coureList:state.coure.coures
}))(HomeScreen)


