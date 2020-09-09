import React, { Component } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
 class Detail extends Component {
    render() {
        return (
            <div className="container">
                <h1>{this.props.couresDetail.tenKhoaHoc}</h1>
                <img src={this.props.couresDetail.hinhAnh} alt=""/>
            </div>
        )
    }
    componentDidMount() {
        Axios({
            method:"GET",
            url:"http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=Backend_01"

        }).then(res=>{
           this.props.dispatch({
               type:"Fetch_Detail",
               payload:res.data
           })
        }).catch(err=>{
            console.log(err)
        })
    }
    
}
export default connect(state=>({
    couresDetail:state.coure.coureDetail||{
        hinhAnh:'',
        maKhoaHoc:'',
        tenKhoaHoc:'',
        ngayTao:'',
        nguoiTao:{
            hoTen:'',
            taiKhoan:''
        }
    }
}))(Detail)

