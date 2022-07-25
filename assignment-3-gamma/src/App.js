import './App.css';
import CustomerInfo from './components/customer-info';
import Header from './components/header';
import OrderInfo from './components/order-info';
import ProductList from './components/product-list';

function App() {
  const data = {
    header: {
      name: "Alan Ford",
      id: "0005152"
    },
    customerInfo: {
      info: [
        {key:"Appointment", value: "10:00 AM (06-05-2022"},
        {key: "Email", value: "abc-test@gmail.com"},
        {key: "Phone", value: "+3142567453"}

      ]
    },
    orderInfo: {
      info: [
        {key:"Status", value: "In Progress"},
        {key: "Door", value: "Mark"},
        {key: "Time", value: "10:00 AM (06-05-2022"}

      ]
    },
    productList: {
      image: "https://www.w3schools.com/howto/img_avatar.png",
      name: "Boltart Bosbesson",
      description: "jhdfsa hjsdfksad hjsahdf kshdkjfkjsh"
    }
  }
  return (
    <div className="App">
      <Header headerData={data.header}/>
      <CustomerInfo customerData={data.customerInfo.info}/>
      <OrderInfo orderData={data.orderInfo.info}/>
      <ProductList productData={data.productList}/>
    </div>
  );
}

export default App;
