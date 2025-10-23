import { useState, FormEvent } from "react"
import { TextField, Button } from '@mui/material'

type AddItemProps = {
  addItem: (item: string) => void;
}

function AddItem({addItem}: AddItemProps) {
  const [item, setItem] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addItem(item); 
    setItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
        <input
          placeholder="할 일을 입력하세요"
          value={item}
          onChange={(e) => setItem(e.target.value)}/>
        <Button type="submit" variant="contained">ADD</Button>
    </form>
  )
}

export default AddItem;