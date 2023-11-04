import { nanoid } from 'nanoid';
import imgDevice from '../assets/images/device.avif';
import { PostList } from './PostList/PostList';
import { DeviceForm } from './DeviceForm/DeviceForm';
import { Modal } from './ModalWindow/ModalWindow';
import { useDispatch, useSelector } from 'react-redux';
import {
  addDevice,
  changeFilter,
  deleteDevice,
  onToggleFavorite,
  selectDevices,
  selectFilter,
} from 'redux/devicesSlice';
import {
  closeModal,
  openModal,
  selectModalData,
  selectModalOpen,
} from 'redux/modalSlice';

export const App = () => {
  // const [devices, setDevices] = useState(devicesData);
  // const [filter, setFilter] = useState('');
  const devices = useSelector(selectDevices);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const isOpen = useSelector(selectModalOpen);
  const modalData = useSelector(selectModalData);
  // const [isOpen, setisOpen] = useState(false);
  // const [modalData, setmodalData] = useState('');
  const onDelete = deviceId => {
    dispatch(deleteDevice(deviceId));
  };

  const onChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  const onOpenModal = data => {
    dispatch(openModal(data));
  };

  const onCloseModal = () => {
    dispatch(closeModal());
  };

  const toggleFavorite = deviceId => {
    dispatch(onToggleFavorite(deviceId));
  };

  const onAddDevice = formData => {
    const hasDuplicates = devices.some(
      device => device.title === formData.title
    );
    if (hasDuplicates) {
      alert('This device is already in the list');
    }
    const finalDevice = {
      ...formData,
      coverImage: imgDevice,
      id: nanoid(),
    };
    dispatch(addDevice(finalDevice));
  };

  const filteredPosts = devices.filter(device =>
    device.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <div>
      <DeviceForm onAddDevice={onAddDevice} />
      {filter === 'promo' && (
        <h1>congrats yuo promocode : #4324 - 40% discount</h1>
      )}
      <h2>Hello from App!</h2>
      <label>
        <span>Enter title to fiend post</span>
        <input onChange={onChangeFilter} value={filter} type="text" />
      </label>
      <PostList
        toggleFavorite={toggleFavorite}
        onOpenModal={onOpenModal}
        onDelete={onDelete}
        devices={filteredPosts}
      />
      {isOpen && <Modal modalData={modalData} onCloseModal={onCloseModal} />}
    </div>
  );
};
