import { useState } from 'react';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal } from 'antd';
import { Select } from '../revel-strap';



const ModalType = (props) => {
    const type1 = [
        { label: 'เสื้อผ้าแฟชั่นผู้ชาย', value: '1' },
        { label: 'เสื้อผ้าแฟชั่นผู้หญิง', value: '2' },
        { label: 'มือถือและอุปกรณ์เสริม', value: '3' },
        { label: 'ความงามและของใช้ส่วนตัว', value: '4' },
    ];
    const type2 = [
        { label: 'เครื่องสำอางสำหรับผิวหน้า', value: '1' },
        { label: 'เครื่องสำอางสำหรับดวงตา', value: '2' },
        { label: 'ลิป', value: '3' },
        { label: 'ผลิตภัณฑ์ดูแลผิวหน้า', value: '4' },
    ];
    const [state, setState] = useState({
        showModal: false
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
    const _selectType2Change = async (data) => {
        console.log(data);
        await setState({
            ...state,
            stateType2: data
        })
    }
    return (
        <>
            <button onClick={() => _clickModal()} type="button" className="button--link">
                <FontAwesomeIcon icon={faPencilAlt} />
            </button>
            <Modal
                title="หมวดหมู่"
                visible={state.showModal}
                onOk={() => _handleOk()}
                onCancel={() => _handleCancel()}
            >
                <div>
                    <Select
                        options={type1}
                        style={{ width: '100%' }}
                        onChange={(data) => _selectType1Change(data)}
                        value={state.stateType1}
                    />
                    <Select
                        options={type2}
                        style={{ width: '100%' }}
                        onChange={(data) => _selectType2Change(data)}
                        value={state.stateType2}
                        setProps={{
                            disabled: state.stateType1 && state.stateType1.value ? false : true
                        }}
                    />
                </div>
                {/* <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p> */}
            </Modal>
        </>
    )
}
export default ModalType;
