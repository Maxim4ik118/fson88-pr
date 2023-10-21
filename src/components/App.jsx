import { useState } from 'react';
import { nanoid } from 'nanoid'
import imgDevice from '../assets/images/device.avif';
import { PostList } from './PostList/PostList';
import { DeviceForm } from './DeviceForm/DeviceForm';

const devicesData = [
  {
    id: 1,
    title: 'Smartphone',
    brand: 'Apple',
    price: 999.99,
    type: 'Mobile',
    coverImage: imgDevice,
    isFavorite: false,
  },
  {
    id: 2,
    title: 'Laptop',
    brand: 'Dell',
    price: 1299.99,
    type: 'Computer',
    coverImage: imgDevice,
    isFavorite: true,
  },
  {
    id: 3,
    title: 'Smartwatch',
    brand: 'Samsung',
    price: 249.99,
    type: 'Wearable',
    coverImage: imgDevice,
    isFavorite: true,
  },
  {
    id: 4,
    title: 'Tablet',
    brand: 'Amazon',
    price: 199.99,
    type: 'Mobile',
    coverImage: imgDevice,
    isFavorite: false,
  },
  {
    id: 5,
    title: 'TV',
    brand: 'Sony',
    price: 799.99,
    type: 'Electronics',
    coverImage: imgDevice,
    isFavorite: false,
  },
  {
    id: 6,
    title: 'Gaming Console',
    brand: 'Microsoft',
    price: 399.99,
    type: 'Gaming',
    coverImage: imgDevice,
    isFavorite: false,
  },
  {
    id: 7,
    title: 'Camera',
    brand: 'Canon',
    price: 599.99,
    type: 'Photography',
    coverImage: imgDevice,
    isFavorite: false,
  },
  {
    id: 8,
    title: 'Headphones',
    brand: 'Sony',
    price: 149.99,
    type: 'Audio',
    coverImage: imgDevice,
    isFavorite: false,
  },
  {
    id: 9,
    title: 'Router',
    brand: 'Linksys',
    price: 79.99,
    type: 'Networking',
    coverImage: imgDevice,
    isFavorite: false,
  },
  {
    id: 10,
    title: 'Fitness Tracker',
    brand: 'Fitbit',
    price: 79.99,
    type: 'Wearable',
    coverImage: imgDevice,
    isFavorite: true,
  },
];

export const App = () => {
  const [devices, setDevices] = useState(devicesData);
  const [filter, setFilter] = useState('');


  const onDelete = deviceId => {
    setDevices(devices.filter(device => device.id !== deviceId));
  };

  const onChangeFilter = event => {
    setFilter(event.target.value);
  };

  const onAddDevice=(formData)=>{
   const hasDuplicates = devices.some(device=>device.title===formData.title)
   if (hasDuplicates) {
    alert("This device is already in the list")
   }
   const finalDevice ={
    ...formData,coverImage: imgDevice,id:nanoid()
   }
   setDevices([...devices,finalDevice])

  }

  const filteredPosts = devices.filter(device =>
    device.title
      .toLocaleLowerCase()
      .includes(filter.toLocaleLowerCase())
  );

  return (
    <div>
      <DeviceForm onAddDevice={onAddDevice}/>
      {filter === 'promo' && (
        <h1>congrats yuo promocode : #4324 - 40% discount</h1>
      )}
      <h2>Hello from App!</h2>
      <label>
        <span>Enter title to fiend post</span>
        <input
          onChange={onChangeFilter}
          value={filter}
          type="text"
        />
      </label>
      <PostList onDelete={onDelete} devices={filteredPosts} />
    </div>
  );
};


