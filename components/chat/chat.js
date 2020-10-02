
const ChatView = (props) => {
    const { data } = props;
    return (
        <div>
            {data.map((item, idx) => (
                <div className={`` + (item.user === 'max' ? 'text-right' : 'text-left')} key={idx} >
                    <label className="text-message">{item.message}</label>
                </div>
            ))}
           
        </div>
    );
}
export default ChatView;