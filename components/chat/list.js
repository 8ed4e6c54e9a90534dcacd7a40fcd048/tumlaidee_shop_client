import Link from "next/link";
import { Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { TimeController } from '../../controller'

const time_controller = new TimeController()
const ListChat = (props) => {
    const { data, user } = props;
    return (
        <div>
            {data.map((item, index) => (
                <Link href={`/chat/${item.name}`} key={index}>
                        <div className="card" >
                            <Card
                                hoverable
                                bordered={false}
                                style={{ width: "100%" }}

                            >
                                <div className="d-flex justify-content-between bd-highlight mb-3">
                                    <div className="bd-highlight" style={{ display: 'flex', alignSelf: 'center', }}>
                                        <div style={{ alignSelf: 'center', }}>
                                            <Avatar size={64} icon={<UserOutlined />} />
                                        </div>
                                        <div style={{ alignSelf: 'center', paddingLeft: 16 }}>
                                            <h4>{item.name}</h4>
                                            <p>{item.messages[0] && item.messages[item.messages.length - 1].message}</p>
                                        </div>
                                    </div>
                                    <div className="bd-highlight" style={{ display: 'flex', alignSelf: 'center', }}>
                                        {time_controller.reformatToDateTime(item.endedAt)}
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Link>

            ))}
                    <Link href={`/chat/5f6efc5f7bc9b944d011f0fa`} key={-1}>

                        <div className="card" >
                            <Card
                                hoverable
                                bordered={false}
                                style={{ width: "100%" }}

                            >
                                <div className="d-flex justify-content-between bd-highlight mb-3">
                                    <div className="bd-highlight" style={{ display: 'flex', alignSelf: 'center', }}>
                                        <div style={{ alignSelf: 'center', }}>
                                            <Avatar size={64} icon={<UserOutlined />} />
                                        </div>
                                        <div style={{ alignSelf: 'center', paddingLeft: 16 }}>
                                            <h4>{"5f6efc5f7bc9b944d011f0fa"}</h4>
                                            <p>{"5f6efc5f7bc9b944d011f0fa"}</p>
                                        </div>
                                    </div>
                                    <div className="bd-highlight" style={{ display: 'flex', alignSelf: 'center', }}>
                                        {/* {time_controller.reformatToDateTime(item.endedAt)} */}
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Link>

        </div>
            );
}
export default ListChat;