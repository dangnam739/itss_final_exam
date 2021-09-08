import logo from './logo.svg';
import './App.css';
import useStorage from './hooks/storage';

function App() {
  const list_std = ['Huyen', 'Hoa', 'Hung', 'Long']
  const [curId, nextItem, prevItem] = useStorage(list_std)
  const printList = list_std => {
    let std_card = '[';
    for (let i = 0; i < list_std.length; i++)
      std_card = std_card + list_std[i] + ","
    std_card = std_card.substring(0, std_card.length - 1);
    std_card = std_card + "]"
    return std_card
  }

  return (
    <div className="App">
      <div>学生一覧：{printList(list_std)}</div>
      <div>位置: {curId + 1}</div>
      <div>名前：{list_std[curId]}</div>
      <button type="button" onClick={nextItem} style={{
        marginRight:
          '10px'
      }}>次に</button>
      <button type="button" onClick={prevItem}>前に</button>
    </div>
  );
}

export default App;
