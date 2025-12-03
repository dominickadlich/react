

interface ItemInterface {
  id: number,
  title: string,
  packed: boolean
}

type onChangeType = (item: ItemInterface) => void;
type onDeleteType =  (id: number) => void;

export default function PackingList({
  items,
  onChangeItem,
  onDeleteItem
}: {
  items: ItemInterface[],
  onChangeItem: onChangeType,
  onDeleteItem: onDeleteType,
}) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={e => {
                onChangeItem({
                  ...item,
                  packed: e.target.checked
                });
              }}
            />
            {' '}
            {item.title}
          </label>
          <button onClick={() => onDeleteItem(item.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
