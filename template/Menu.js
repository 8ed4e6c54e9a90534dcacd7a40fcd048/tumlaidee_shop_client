import React from 'react'

export default function Menu() {
    return (
        <nav className="col-md-2 d-none d-md-block bg-white sidebar">
            <div className="sidebar-sticky">
                <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>การขายของฉัน test</span>
                    <a className="d-flex align-items-center text-muted" href="#">
                        <span data-feather="plus-circle" />
                    </a>
                </h5>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">
                            <span data-feather="home" />
                        ที่ต้องชำระเงิน <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file" />
                        รอตรวจสอบ
                    </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="shopping-cart" />
                        ที่ต้องจัดส่ง
                    </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="users" />
                        ดำเนินการเรียบร้อย
                    </a>
                    </li>
                </ul>
                <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>สินค้าของฉัน</span>
                    <a className="d-flex align-items-center text-muted" href="#">
                        <span data-feather="plus-circle" />
                    </a>
                </h5>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file-text" />
                        รายการสินค้า
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file-text" />
                        เพิ่มสินค้า
                        </a>
                    </li>
                </ul>
                <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>โปรโมชั่นของฉัน</span>
                    <a className="d-flex align-items-center text-muted" href="#">
                        <span data-feather="plus-circle" />
                    </a>
                </h5>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file-text" />
                        รายการโปรโมชั่น
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file-text" />
                        เพิ่มโปรโมชั่น
                        </a>
                    </li>
                </ul>
                <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>คูปองของฉัน</span>
                    <a className="d-flex align-items-center text-muted" href="#">
                        <span data-feather="plus-circle" />
                    </a>
                </h5>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file-text" />
                        รายการคูปอง
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file-text" />
                        เพิ่มคูปอง
                        </a>
                    </li>
                </ul>
                <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>ลูกค้าของฉัน</span>
                    <a className="d-flex align-items-center text-muted" href="#">
                        <span data-feather="plus-circle" />
                    </a>
                </h5>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file-text" />
                        รายการลูกค้า
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file-text" />
                        เพิ่มลูกค้า
                        </a>
                    </li>
                </ul>
                <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>ระดับลูกค้า</span>
                    <a className="d-flex align-items-center text-muted" href="#">
                        <span data-feather="plus-circle" />
                    </a>
                </h5>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file-text" />
                        รายการระดับลูกค้า
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file-text" />
                        เพิ่มระดับลูกค้า
                        </a>
                    </li>
                </ul>
                <h5 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>รายงานภาพรวม</span>
                    <a className="d-flex align-items-center text-muted" href="#">
                        <span data-feather="plus-circle" />
                    </a>
                </h5>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file-text" />
                            รายงานรายได้
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span data-feather="file-text" />
                            รายงานสินค้าขายดี
                        </a>
                    </li>
                </ul>
            </div>
        </nav >

    )
}
