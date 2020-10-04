import Link from "next/link";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product = (props) => {
  return (
    <div className="container">
      <div>
        <h2>เพิ่มสินค้า</h2>
      </div>
      <div className="row">
        <div className="form-group">
          <label >รูป</label>
          <div style={{ border: "0.5px solid #aaa", width: 40, height: 40, display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="form-group">
          <label  >ชื่อ</label>
          <input className="form-control" />
        </div>
      </div>
      <div className="row">
        <div className="form-group">
          <label >รายละเอียด</label>
          <input className="form-control" />
        </div>
      </div>
      <div className="row">
        <div >
          <label >หมวดหมู่</label>
          <input className="form-control" />
        </div>
      </div>
    </div>
  );
}
export default Product;