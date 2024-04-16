import './main.css'

export type ListingItem = {
  listing_id: number;
  url: string;
  MainImage?: { url_570xN: string };
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
  state: string;
  error_messages?: string[];
};

type ListingProps = {
  items: ListingItem[];
};

const Listing = ({ items = [] }: ListingProps) => {

  const formatPrice = (currency_code: string, price: string): string => {
    switch (currency_code) {
      case 'USD':
        return `$${price}`;
      case 'EUR':
        return `€${price}`;
      default:
        return `${price} ${currency_code}`;
    }
  };

  const getQuantityClass = (quantity: number): string => {
    if (quantity <= 10) return 'level-low';
    if (quantity <= 20) return 'level-medium';
    return 'level-high';
  };

  return (
    <div className="item-list">
      {items.map((item) => {
        if (item.state === 'removed' && item.error_messages && item.error_messages.length > 0) {
          return (
            <div key={item.listing_id} className="item error">
              <p>Error: {item.error_messages[0]}</p>
            </div>
          );
        } else {
          //!!! const imageUrl = item.MainImage && item.MainImage.url_570xN ? item.MainImage.url_570xN : 'path_to_default_image.jpg';
          const imageUrl = item.MainImage?.url_570xN ?? 'path_to_default_image.jpg';

          return (
            <div key={item.listing_id} className="item">
              <div className="item-image">
                <a href={item.url}>
                  <img src={imageUrl} alt={item.title} />
                </a>
              </div>
              <div className="item-details">
                <p className="item-title">{item.title.length > 50 ? `${item.title.substring(0, 50)}…` : item.title}</p>
                <p className="item-price">{formatPrice(item.currency_code, item.price)}</p>
                <p className={`item-quantity ${getQuantityClass(item.quantity)}`}>{`${item.quantity} left`}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Listing;
