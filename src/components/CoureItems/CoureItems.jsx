import React from 'react'

export default function CoureItems({item}) {
    return (
        <div className="col-sm-3">
            <div className="card">
            <img className="card-img-top" src={item.hinhAnh} alt />
            <div className="card-body">
            <h4 className="card-title">Tên khóa học :{item.tenKhoaHoc}</h4>
    <p className="card-text">Người tạo {item.nguoiTao.hoTen}</p>
                <p className="card-text">rating khóa học</p>
                <button className="btn btn-success">Chi tiết khóa học</button>
            </div>
        </div>
        </div>
        

    )
}
