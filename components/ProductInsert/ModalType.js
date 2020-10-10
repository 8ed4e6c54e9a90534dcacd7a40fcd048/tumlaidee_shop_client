import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ModalType = (props) => {
    return (
        <button type="button" className="button--link">
            <FontAwesomeIcon icon={faPencilAlt} />
        </button>
    )
}
export default ModalType;
