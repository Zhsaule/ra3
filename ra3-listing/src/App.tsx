import etsyData from './data/etsy.json';
import Listing, { ListingItem } from './components/Listing/Listing';
// import './App.css'

const data = JSON.stringify(etsyData);

const items: ListingItem[] = JSON.parse(data);

function App() {
  return (
    <Listing items={items} />
  )
}

export default App
