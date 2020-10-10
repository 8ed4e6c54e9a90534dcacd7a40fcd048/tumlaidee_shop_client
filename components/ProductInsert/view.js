import Link from "next/link";
import { faPlus, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from 'antd';
import ModalType from './ModalType';
const Product = (props) => {
  const name = '';
  return (
    <div className="container">
      <div className="product-edit_section" >
        <h2 >ข้อมูลทั่วไป</h2>
        <div className="container">
          <div className="row edit-row">
            <div className="edit-label edit-title">
              <div className="mandatory">
                <span >*</span>
              </div>
              <span>ชื่อสินค้า</span>
            </div>
            <div className="col">
              <Input placeholder="ชื่อสินค้า" suffix={name.length + "/120"} />
            </div>
          </div>
          <div className="row edit-row">
            <div className="edit-label edit-title">
              <div className="mandatory">
                <span>*</span>
              </div>
              <span>รายละเอียดสินค้า</span>
            </div>
            <div className="col">
              <Input.TextArea rows={4} placeholder="ชื่อสินค้า" suffix={name.length + "/120"} />
            </div>
          </div>
          <div className="row edit-row">
            <div className="edit-label edit-title">
              <div className="mandatory">
                <span>*</span>
              </div>
              <span>หมวดหมู่</span>
            </div>
            <div className="col">
              <ModalType />
              {/* <button type="button" className="button--link">
                <FontAwesomeIcon icon={faPencilAlt} />
              </button> */}
            </div>
          </div>
        </div>
      </div>

      <div className="product-edit_section">
        <h2 >ข้อมูลการขาย</h2>
        <div className="container">
          <div className="row edit-row">
            <div className="edit-label edit-title">
              <div className="mandatory">
                <span >*</span>
              </div>
              <span>ราคา</span>
            </div>
            <div className="col">
              <Input placeholder="฿" />
            </div>
          </div>
          <div className="row edit-row">
            <div className="edit-label edit-title">
              <div className="mandatory">
                <span >*</span>
              </div>
              <span>คลัง</span>
            </div>
            <div className="col">
              <Input placeholder="0" />
            </div>
          </div>
          <div className="row edit-row">
            <div className="edit-label edit-title">
              <span>ตัวเลือกสินค้า</span>
            </div>
            <div className="col">
              <button type="button" className="repeater-add shopee-button shopee-button--normal">
                <span>
                  <FontAwesomeIcon icon={faPlus} />
                  <span>เปิดใช้งานตัวเลือกสินค้า</span>
                </span>
              </button>
            </div>
          </div>
          <div className="row edit-row">
            <div className="edit-label edit-title">
              <span>ขายส่ง</span>
            </div>
            <div className="col">
              <button type="button" className="repeater-add shopee-button shopee-button--normal">
                <span>
                  <FontAwesomeIcon icon={faPlus} />
                  <span>เพิ่มช่วงราคา</span>
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
      <div className="product-edit_section">
        <h2 >การจัดการสื่อ</h2>
        <div className="container">
          <div className="row edit-row">
            <div className="edit-label edit-title">
              <span>ภาพสินค้า</span>
            </div>
            <div className="col">
              <div className="container" style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div className="shopee-image-manager__item ignore-item">
                  <div className="shopee-image-manager__content">
                    <div className="shopee-image-manager__upload">
                      <div className="shopee-file-upload" accept="image/*">
                        <div className="shopee-upload" aspect="1">
                          <div className="shopee-upload-wrapper shopee-upload-dragger">
                            <input type="file" name="file" accept="image/*" multiple="multiple" aspect="1" class="shopee-upload__input" />
                            <div class="shopee-image-manager__upload__content">
                              <FontAwesomeIcon icon={faPlus} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="explain-text">
                      <div className="mandatory">
                        <span class="mandatory-icon">*</span>
                      </div>
                      <span>ภาพปก</span>
                    </div>
                  </div>
                </div>
                <div className="shopee-image-manager__item ignore-item">
                  <div className="shopee-image-manager__content">
                    <div className="shopee-image-manager__upload">
                      <div className="shopee-file-upload" accept="image/*">
                        <div className="shopee-upload" aspect="1">
                          <div className="shopee-upload-wrapper shopee-upload-dragger">
                            <input type="file" name="file" accept="image/*" multiple="multiple" aspect="1" class="shopee-upload__input" />
                            <div class="shopee-image-manager__upload__content">
                              <FontAwesomeIcon icon={faPlus} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="explain-text">
                      <span>รูปภาพ 1</span>
                    </div>
                  </div>
                </div>
                <div className="shopee-image-manager__item ignore-item">
                  <div className="shopee-image-manager__content">
                    <div className="shopee-image-manager__upload">
                      <div className="shopee-file-upload" accept="image/*">
                        <div className="shopee-upload" aspect="1">
                          <div className="shopee-upload-wrapper shopee-upload-dragger">
                            <input type="file" name="file" accept="image/*" multiple="multiple" aspect="1" class="shopee-upload__input" />
                            <div class="shopee-image-manager__upload__content">
                              <FontAwesomeIcon icon={faPlus} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="explain-text">
                      <span>รูปภาพ 2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-edit_section">
          <h2 >การจัดส่ง</h2>
          <div className="container">
            <div className="row edit-row">
              <div className="edit-label edit-title">
                <span>น้ำหนัก</span>
              </div>
              <div className="col">
                <Input placeholder="0" />
              </div>
            </div>
            <div className="row edit-row">
              <div className="edit-label edit-title">
                <span>ขนาดพัสดุ</span>
              </div>
              <div className="col">
                <Input placeholder="0" />
              </div>
            </div>
          </div>
        </div>

      </div>

    </div >
  );
}
export default Product;