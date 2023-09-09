import ItemList from "./ItemList";


// controlled component control by parent ReastaurantMenu component
const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  // there is no use of this dummy in this component, we are just padding to ItemList componnet that's it

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Accordian body */}
        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;