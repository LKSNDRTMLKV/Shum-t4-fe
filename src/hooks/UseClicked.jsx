import React, {useState} from 'react';

const UseClicked = () => {
const [clicked, setClicked] = useState(false);

const showMoreOptions = () => {
    setClicked(!clicked);
    console.log(clicked)
}

return {
    clicked,
    showMoreOptions,
  };

}

export default UseClicked;