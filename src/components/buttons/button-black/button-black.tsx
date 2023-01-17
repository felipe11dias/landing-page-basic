import { useState } from 'react';

function ButtonBlack(props: any) {
  const [description, setDescription] = useState(props.description);

  return (
    <button style={{backgroundColor: description === 'DEU CERTO' ? 'black' : 'red', color: 'white'}} onClick={() => setDescription('DEU CERTO')}>{description}</button>
  )
}

export default ButtonBlack