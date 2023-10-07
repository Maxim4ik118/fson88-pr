import { Component } from 'react';
import imgDevice from '../assets/images/device.avif';
import { PostList } from './PostList/PostList';

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

export class App extends Component {
  state = {
    devices: devicesData,
    filter: '',
  };
  onDelete = deviceId => {
    this.setState({
      devices: this.state.devices.filter(device => device.id !== deviceId),
    });
  };
  onChangeFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };
  render() {
    const filteredPosts = this.state.devices.filter(device =>
      device.title
        .toLocaleLowerCase()
        .includes(this.state.filter.toLocaleLowerCase())
    );
    return (
      <div>
        {this.state.filter === 'promo' && (
          <h1>congrats yuo promocode : #4324 - 40% discount</h1>
        )}
        <h2>Hello from App!</h2>
        <label>
          <span>Enter title to fiend post</span>
          <input
            onChange={this.onChangeFilter}
            value={this.state.filter}
            type="text"
          />
        </label>
        <PostList onDelete={this.onDelete} devices={filteredPosts} />
      </div>
    );
  }
}
