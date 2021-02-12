import React from 'react';

const List = ({ items }) => {
  const [filterItems, setFilterdItems] = React.useState(items)

  const filteredItems = (e) => {
    const searchValue = e.target.value;
    const currentItems = [...items];
    const matchingItems = currentItems.filter(item => item.includes(searchValue))

    setFilterdItems(matchingItems)
  }

  return(
    <>
    <input onChange={filteredItems}/>
    <ul>
      {filterItems.map(item => (
        <li key={item}>{item}</li>
      ))}
      <li><a href="/about">About Page</a></li>
    </ul>
    </>
  );
}

// class List extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       filteredItems: this.props.items
//     }
//   }

//   filterItems = (e) => {
//     const searchValue = e.target.value;
//     const currentItems = [...this.props.items];
//     console.log(currentItems)
//     const matchingItems = currentItems.filter(item => item.includes(searchValue));

//     this.setState({
//       filteredItems: matchingItems
//     })
//   }

//   render() {
//     return(
//       <>
//       <input onChange={this.filterItems}/>
//       <ul>
//         {this.state.filteredItems.map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//       </>
//     );

//   }
// }

const ListContainer = () => <List items={['React.js', 'Next.js', 'Enjoy.js']}/>

export default ListContainer;