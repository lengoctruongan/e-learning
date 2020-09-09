import React, { Component } from 'react'
import {Formik,Form,Field} from 'formik'
export default class SignUp extends Component {
    handleSubmit(values){
            console.log(values)
    }
    render() {
        
        return (
            <div className="container">
                <Formik
                initialValues={{
                    taiKhoan:'',
                    matKhau:"",
                    hoTen:"",
                    email:"",
                    soDT:"",
                    maNhom:""
                }}
                
                render={(formikProps)=>(
                    <form>
                    <div className="form-group">
                        <label >Tài khoản</label>
                        <Field type="text" className="form-control" name="taiKhoan" onChange={formikProps.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label >Mật khẩu </label>
                        <Field type="text" className="form-control" name="matKhau" onChange={formikProps.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label >Họ tên</label>
                        <Field type="text" className="form-control" name="hoTen" onChange={formikProps.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label >Email</label>
                        <Field type="text" className="form-control" name="email" onChange={formikProps.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label >Số điện thoại</label>
                        <Field type="text" className="form-control" name="soDT" onChange={formikProps.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label >Mã nhóm</label>
                        <Field name="maNhom"  className="form-control" name="maNhom" onChange={formikProps.handleChange}>
                            <option value="">GP01</option>
                            <option value="">GP02</option>
                            <option value="">GP03</option>
                            <option value="">GP04</option>
                            <option value="">GP05</option>
                            <option value="">GP06</option>
                            <option value="">GP07</option>
                            <option value="">GP08</option>
                            <option value="">GP09</option>
                            <option value="">GP10</option>
                        </Field>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-success" type="submit">Đăng ký</button>
                    </div>
                </form>
                )}
                />
                
            </div>
        )
    }
}
