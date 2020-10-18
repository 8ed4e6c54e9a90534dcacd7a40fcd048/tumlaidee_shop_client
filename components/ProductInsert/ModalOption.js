import { useState } from 'react';
import { faPlus, faTimes, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'antd';
import { Select } from '../revel-strap';



const ModalType = (props) => {
    const [state, setState] = useState({
        showModal: false,
        option: [{
            name: 'ขนาด',
            childen: [{
                name: 'เล็ก'
            },
            {
                name: 'กลาง'
            },
            {
                name: 'ใหญ่'
            }]
        }]
    });
    const _clickModal = async () => {
        await setState({
            ...state,
            showModal: true
        })
    }
    const _handleOk = async () => {
        await setState({
            ...state,
            showModal: false
        })
        await props.modalTypeChange(state)
    }
    const _handleCancel = async () => {
        await setState({
            ...state,
            showModal: false
        })
    }
    const _selectType1Change = async (data) => {
        console.log(data);
        await setState({
            ...state,
            stateType1: data,
            stateType2: {},
        })
    }
    return (
        <>
            <button onClick={() => _clickModal()} type="button" className="repeater-add shopee-button shopee-button--normal">
                <span>
                    <FontAwesomeIcon icon={faPlus} />
                    <span>เปิดใช้งานตัวเลือกสินค้า</span>
                </span>
            </button>
            <Modal
                title="เพิ่มตัวเลือก"
                visible={state.showModal}
                onOk={() => _handleOk()}
                onCancel={() => _handleCancel()}
            >
                <div >
                    <div className="root-modal-option">
                        {state.option.map((val, index) => {
                            return (
                                <div className="modal-option">
                                    <div className="modal-option-title" >
                                        <span>
                                            {val.name} <FontAwesomeIcon style={{ cursor: 'pointer' }} color="#1890ff" icon={faPencilAlt} /><FontAwesomeIcon style={{ cursor: 'pointer' }} color="red" icon={faTimes} />
                                        </span>
                                    </div>
                                    <div className="modal-option-detail">
                                        {val.childen.map((cVal, cIndex) => {
                                            return (
                                                <div className="modal-option-list">
                                                    <span>
                                                        {cVal.name} <FontAwesomeIcon style={{ cursor: 'pointer' }} color="#1890ff" icon={faPencilAlt} /><FontAwesomeIcon style={{ cursor: 'pointer' }} color="red" icon={faTimes} />
                                                    </span>
                                                </div>
                                            )
                                        })}
                                        <div className="modal-option-list-plus">
                                            <span>
                                                <FontAwesomeIcon color="green" icon={faPlus} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div>
                        <button type="button" className="repeater-add shopee-button shopee-button--normal">
                            <span>
                                <FontAwesomeIcon icon={faPlus} />
                                <span>เปิดใช้งานตัวเลือกสินค้า</span>
                            </span>
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    )
}
export default ModalType;
